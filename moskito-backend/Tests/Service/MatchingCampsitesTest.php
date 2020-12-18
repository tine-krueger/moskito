<?php  

namespace App\Tests\Service;

use App\Entity\Campsite;
use App\Entity\CampsiteFeature;
use App\Service\MatchingCampsites;
use App\Repository\CampsiteRepository;
use App\Repository\CampsiteFeatureRepository;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;

class MatchingCampsitesTest
{   
    private $prophet;

    /**
     * @dataProvider filter
     */
    public function testMatchingCampites( ) : void {

        $filter = ['trueFeatures' => [(new CampsiteFeature())->setType('wlan')->setValue(true)]];
        
        $campsite1 = (new Campsite())->setId(2);
        $feature1 = (new CampsiteFeature())->setType('wlan')->setValue(true)->setCampsite($campsite1)->setId(1);
        

        
        
        $mockFeatureRepo = $this->prophet->prophesize(CampsiteFeatureRepository::class);
        $mockCampsiteRepo = $this->prophet->prophesize(CampsiteRepository::class);
        $mockFeatureRepo->findBy(Argument::any())->willReturn([$campsite1]);
        $mockCampsiteRepo->findAll()->willReturn([$campsite1]);

        $service = new MatchingCampsites($mockFeatureRepo->reveal(), $mockCampsiteRepo->reveal());
        $actual = $service->getMatchingCampsites($filter);   
       

        $this->assertEquals([], $actual);
    } 

    public function filter() 
    {
        return [
            'empty filter' => ["features" => []],
            'wlan true' => ["features" => ['type' => 'wlan', 'value' => true]]
        ];
    }


    protected function setUp(): void {
        $this->prophet = new \Prophecy\Prophet;
    }

  

}