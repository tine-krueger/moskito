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
     * @dataProvider loginTrueData
     */
    public function testLoginServiceSuccess(array $loginData, array $expected): void {

        $databaseMock = $this->usersDatabaseMock();
        $mockLogin = (new User())->setEmail($loginData[0])->setPassword($loginData[1]);
        
        $actual = $this->innerFunctionSetup($mockLogin, $loginData, true);
        $this->assertEquals($expected, $actual);

    }

    public function loginTrueData() {

        return [
            [
                ['tine@freutsich.de', 'qwertz'],
                [ 'isValid' => true, 'user' => (new User())->setEmail('tine@freutsich.de')->setPassword('qwertz')] 
            ],
            [
                ['alex@siehtschwarz.de', 'mnbvc'], 
                [ 'isValid' => true, 'user' => (new User())->setEmail('alex@siehtschwarz.de')->setPassword('mnbvc')] 
            ]
        ];
    }

    /**
     * @dataProvider loginTrueEmail
     */
    public function testLoginServicePasswordFails(array $loginData, array $expected): void {

        $databaseMock = $this->usersDatabaseMock();
        $mockLogin = (new User())->setEmail($loginData[0])->setPassword($loginData[1]);
        
        $actual = $this->innerFunctionSetup($mockLogin, $loginData, false);
        $this->assertEquals($expected, $actual);

    }

    public function loginTrueEmail() {

        return [
            [
                ['tine@freutsich.de', 'wertz'],
                [ 'isValid' => false, 'user' => (new User())->setEmail('tine@freutsich.de')->setPassword('wertz')] 
            ],
            [
                ['alex@siehtschwarz.de', 'nbvc'], 
                [ 'isValid' => false, 'user' => (new User())->setEmail('alex@siehtschwarz.de')->setPassword('nbvc')] 
            ]
        ];
    }

    /**
     * @dataProvider loginEmailNotFound
     */
    public function testLoginServiceEmailFails(array $loginData, array $expected): void {

        $databaseMock = $this->usersDatabaseMock();
        $mockLogin = null;
        
        $actual = $this->innerFunctionSetup($mockLogin, $loginData, false);
        $this->assertEquals($expected, $actual);

    }

    public function loginEmailNotFound() {

        return [
            [
                ['tine@aergertsich.de', 'wertz'],
                [ 'isValid' => false] 
            ],
            [
                ['alex@siehtschwarz.de', 'nbvc'], 
                [ 'isValid' => false] 
            ]
        ];
    }

    protected function usersDatabaseMock(): array 
    {
        $users = [
            (new User())->setEmail('tine@freutsich.de')->setPassword('qwertz'),
            (new User())->setEmail('alex@siehtschwarz.de')->setPassword('mnbvc'),
            (new User())->setEmail('karla@drehtfrei.de')->setPassword('äölkj')
        ];
        return $users;
    }

    protected function innerFunctionSetup(?User $mockLogin, array $loginData, bool $isValid){
        $mockRepo = $this->prophesize(UserRepository::class);
        $mockRepo->findOneBy(Argument::any())->willReturn($mockLogin);

        $mockEncoder = $this->prophesize(UserPasswordEncoderInterface::class);
        $mockEncoder->isPasswordValid(Argument::cetera())->willReturn($isValid);

        $service = new LoginService($mockEncoder->reveal(), $mockRepo->reveal());
        
        return $service->login($loginData[0], $loginData[1]);

    }
}