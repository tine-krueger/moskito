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
     * @dataProvider
     */
    public function testMatchingCampites( ) : void {

        $filter = ['trueFeatures' => [(new CampsiteFeature())->setType('wlan')->setValue(true)]];
        
        $campsiteMock = new Campsite();
        $featureMock = (new CampsiteFeature())->setType('wlan')->setValue(true)->setCampsite($campsiteMock);
        
        $mockFeatureRepo = $this->prophet->prophesize(CampsiteFeatureRepository::class);
        $mockCampsiteRepo = $this->prophet->prophesize(CampsiteRepository::class);
        $mockFeatureRepo->findBy(Argument::any())->willReturn([$campsiteMock]);
        $mockCampsiteRepo->findAll()->willReturn([$campsiteMock]);

        $service = new MatchingCampsites($mockFeatureRepo->reveal(), $mockCampsiteRepo->reveal());
        $actual = $service->getMatchingCampsites($filter);   
       

        $this->assertEquals([], $actual);
    } 

   


    protected function setUp(): void {
        $this->prophet = new \Prophecy\Prophet;
    }

  

}