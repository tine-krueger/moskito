<?php  

namespace App\Tests\Service;

use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Service\PasswordEncoder;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;
use Prophecy\PhpUnit\ProphecyTrait;

class PasswordEncoderTest extends TestCase 
{   
    use ProphecyTrait;

    /**
     * @dataProvider passwords
     */
    public function testPasswordEncoder(string $password, string $excepted) {
       
        $mockEncoder = $this->prophesize(UserPasswordEncoderInterface::class);
        $user = new User();

        $mockEncoder->encodePassword($user, $password)->willReturn($excepted);

        $service = new PasswordEncoder($mockEncoder->reveal());
        $actual = $service->encode($password, $user);
        
        $this->assertEquals($excepted, $user->getPassword());
    }

    public function passwords() {
        return [
            ['qwertz', 'symbolscode'],
        ];
    }
}
