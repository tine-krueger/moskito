<?php declare(strict_types=1);

namespace App\Tests\Serializer;

use PHPUnit\Framework\TestCase;
use App\Serializer\ViolationsSerializer;

final class ViolationsSerializerTest extends TestCase {
    
    public function testViolationsArrayToString(): void {
        $serializer = new ViolationsSerializer();
        $errors = ["violations" => 
                [
                    'propertyPath' => 'email',
                    'message' => 'The email is not a valid email'
                ]
            ];
        $result = $serializer->serialize($errors);

        $this->assertEquals('{"errors":["email: The email is not a valid email"]}', $result);
    }

    public function testResultIsJsonString(): void {
        $serializer = new ViolationsSerializer();
        $errors = ["violations" => 
                [
                    'propertyPath' => 'email',
                    'message' => 'The email is not a valid email'
                ]
            ];
        $result = $serializer->serialize($errors);
        $jsonTest = json_encode(['errors' => ["email: The email is not a valid email"]]);

        $this->assertStringMatchesFormat($jsonTest, $result);
    }
    
}