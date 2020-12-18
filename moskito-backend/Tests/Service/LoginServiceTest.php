<?php  

namespace App\Tests\Service;

use App\Entity\User;
use App\Service\LoginService;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Repository\UserRepository;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;

class LoginServiceTest extends TestCase 
{   
    private $prophet;

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

    
    protected function setUp(): void {
        $this->prophet = new \Prophecy\Prophet;
    }

    private function innerFunctionSetUp(array $loginData, array $userData) {
        $users = [];
        foreach ( $userData as $user ) {
            $users[] = (new User())->setEmail($user[0])->setPassword($user[1]);
        }
        $mockUser = null;
        foreach ($users as $user) {
            $user->getEmail() === $loginData[0] && $mockUser = $user;
        }

        $mockIsValid = false;
        if ($mockUser !== null ) {
            $mockUser->getPassword() === $loginData[1] && $mockIsValid = true;
        }

        $mockRepo = $this->prophet->prophesize(UserRepository::class);
        $mockRepo->findOneBy(Argument::any())->willReturn($mockUser);

        $mockEncoder = $this->prophet->prophesize(UserPasswordEncoderInterface::class);
        $mockEncoder->isPasswordValid(Argument::cetera())->willReturn($mockIsValid);

        $service = new LoginService($mockEncoder->reveal(), $mockRepo->reveal());
        return $service->login($loginData[0], $loginData[1]);
    }

}