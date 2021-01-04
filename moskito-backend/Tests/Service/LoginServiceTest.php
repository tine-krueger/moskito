<?php  

namespace App\Tests\Service;

use App\Entity\User;
use App\Service\LoginService;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Repository\UserRepository;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;
use Prophecy\PhpUnit\ProphecyTrait;

class LoginServiceTest extends TestCase 
{   
    use ProphecyTrait;

    /**
     * @dataProvider loginData
     */
    public function testLoginService( array $loginData, array $userData, array $expected): void {
        
        $actual = $this->innerFunctionSetUp($loginData, $userData);
        $this->assertEquals($expected, $actual);

    }

    public function loginData() {

        return [
            [
                ['tine@freutsich.de', 'qwertz'], 
                [
                    ['tine@freutsich.de', 'qwertz'],
                    ['alex@siehtschwarz.de', 'mnbvc'],
                    ['karla@drehtfrei.de', 'äölkj']
                ],
                [ 'isValid' => true, 'user' => (new User())->setEmail('tine@freutsich.de')->setPassword('qwertz')] 
            ],
            [
                ['tine@freutsich.de', 'iop'], 
                [
                    ['tine@freutsich.de', 'qwertz'],
                    ['alex@siehtschwarz.de', 'mnbvc'],
                    ['karla@drehtfrei.de', 'äölkj']
                ],
                [ 'isValid' => false, 'user' => (new User())->setEmail('tine@freutsich.de')->setPassword('qwertz')] 
            ],
            [
                ['mensch@meier.de', 'iop'], 
                [
                    ['tine@freutsich.de', 'qwertz'],
                    ['alex@siehtschwarz.de', 'mnbvc'],
                    ['karla@drehtfrei.de', 'äölkj']
                ],
                [ 'isValid' => false ] 
            ]

        ];
    }

    /**
     * @dataProvider loginDataFail
     */
    public function testLoginServiceFail( array $loginData, array $userData, array $expected): void {
        
        $actual = $this->innerFunctionSetUp($loginData, $userData);
        $this->assertNotEquals($expected, $actual);

    }

    public function loginDataFail() {

        return [
            
            [
                ['mensch@meier.de', 'iop'], 
                [
                    ['tine@freutsich.de', 'qwertz'],
                    ['alex@siehtschwarz.de', 'mnbvc'],
                    ['karla@drehtfrei.de', 'äölkj']
                ],
                [ 'isValid' => false,'user' => (new User())->setEmail('tine@freutsich.de')->setPassword('qwertz') ] 
            ]

        ];
    }

    private function innerFunctionSetUp(array $loginData, array $userData): array {
        $databaseMock = $this->usersDatabaseMock($userData);
        $userMock = $this->mockUser($databaseMock, $loginData);
        $isUserMockValid = $this->validateMock($userMock, $loginData);

        $mockRepo = $this->prophesize(UserRepository::class);
        $mockRepo->findOneBy(Argument::any())->willReturn($userMock);

        $mockEncoder = $this->prophesize(UserPasswordEncoderInterface::class);
        $mockEncoder->isPasswordValid(Argument::cetera())->willReturn($isUserMockValid);

        $service = new LoginService($mockEncoder->reveal(), $mockRepo->reveal());
        
        return $service->login($loginData[0], $loginData[1]);
    }

    protected function usersDatabaseMock(array $userData): array 
    {
        $users = [];
        foreach ( $userData as $user ) {
            $users[] = (new User())->setEmail($user[0])->setPassword($user[1]);
        }
        return $users;
    }

    protected function mockUser(array $databaseMock, array $loginData): ?User 
    {
        $userMock = null;
        foreach ($databaseMock as $user) {
            $user->getEmail() === $loginData[0] && $userMock = $user;
        }
        return $userMock;
    }

    protected function validateMock( ?User $userMock, array $loginData): bool
    {
        $isMockValid = false;
        if ($userMock !== null ) {
            $userMock->getPassword() === $loginData[1] && $isMockValid = true;
        }
        return $isMockValid;
    }

}