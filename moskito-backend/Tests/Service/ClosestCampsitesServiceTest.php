<?php  

namespace App\Tests\Service;

use App\Entity\Campsite;
use App\Service\ClosestCampsitesService;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;

class ClosestCampsitesServiceTest extends TestCase 
{  
    const EARTH_RADIUS = 6371;

    /**
     * @dataProvider geocodesFilter
     */
    public function  testGetClosestCampsites(array $campsiteCodes, array $filter, array $expectedCodes): void {
        $campsiteArray = $this->mockCampsites($campsiteCodes);
        $expected = $this->mockCampsites($expectedCodes);
        
        
        $service = new ClosestCampsitesService();
        $actual = $service->getClosestCampsites($filter, $campsiteArray);
        $this->assertEquals($expected, $actual);
    }

    public function geocodesFilter()
    {
        return[
            'Berlin or Hamburg, 100km from Geesthacht is Hamburg' => [
                [[52.50142, 13.40479], [53.56401, 10.00985]], 
                ['latitude' => 53.42309,'longitude' => 10.4172,'distance' => 100],
                [[53.56401, 10.00985]]
            ],

            'Berlin, Hamburg or Winsen, 100km from Geesthacht is Hamburg and Winsen' => [
                [[52.50142, 13.40479], [53.56401, 10.00985], [53.357085, 10.20782]], 
                ['latitude' => 53.42309,'longitude' => 10.4172,'distance' => 100],
                [[53.56401, 10.00985], [53.357085, 10.20782]]
            ],

            'Berlin, Hamburg or Winsen, 100km from Hannover empty Array' => [
                [[52.50142, 13.40479], [53.56401, 10.00985], [53.357085, 10.20782]], 
                ['latitude' => 52.375892,'longitude' => 9.73201,'distance' => 100],
                []
            ]
            
            ];
    }

    /**
     * @dataProvider geocodesFilterFail
     */
    public function  testGetClosestCampsitesFails(array $campsiteCodes, array $filter, array $expectedCodes): void {
        $campsiteArray = $this->mockCampsites($campsiteCodes);
        $expected = $this->mockCampsites($expectedCodes);
        
        
        $service = new ClosestCampsitesService();
        $actual = $service->getClosestCampsites($filter, $campsiteArray);
        $this->assertNotEquals($expected, $actual);
    }

    public function geocodesFilterFail()
    {
        return[
            'Berlin or Hamburg, 100km from Geesthacht not empty' => [
                [[52.50142, 13.40479], [53.56401, 10.00985]], 
                ['latitude' => 53.42309,'longitude' => 10.4172,'distance' => 100],
                []
            ],

            'Berlin, Hamburg or Winsen, 100km from Geesthacht not only Hamburg' => [
                [[52.50142, 13.40479], [53.56401, 10.00985], [53.357085, 10.20782]], 
                ['latitude' => 53.42309,'longitude' => 10.4172,'distance' => 100],
                [[53.357085, 10.20782]]
            ],

            'Berlin, Hamburg or Winsen, 100km from Hannover is not Berlin' => [
                [[52.50142, 13.40479], [53.56401, 10.00985], [53.357085, 10.20782]], 
                ['latitude' => 52.375892,'longitude' => 9.73201,'distance' => 100],
                [[52.50142, 13.40479]]
            ]
            
            ];
    }

    protected function mockCampsites(array $codes ): array {
        $campsites = [];
        foreach ($codes as $code) {
            $campsites [] = (new Campsite())->setLatitude($code[0])->setLongitude($code[1]);
        }

        return $campsites;
    }

}