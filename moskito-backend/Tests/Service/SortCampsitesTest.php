<?php  

namespace App\Tests\Service;

use App\Entity\Campsite;
use App\Service\SortCampsites;
use App\Repository\CampsiteRepository;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;
use Prophecy\PhpUnit\ProphecyTrait;

class SortCampsitesTest extends TestCase 
{   
    use ProphecyTrait;

    /**
     * @dataProvider arraysForInputAndExcepted
     */
    public function testCampsitesById(array $idsArray, array $idsForExpected ) : void {
        $comparisonElements = $this->innerFunctionSetUp($idsArray, $idsForExpected);
        $this->assertEquals($comparisonElements['expected'], $comparisonElements['actual']);
    } 

    public function arraysForInputAndExcepted(): array
    {
        return [
            'existing ids return corresponding campsites' => [[1,5,3,8],[1,5,3,8]],
            'empty ids array returns empty campsites array' => [[],[]],
            'not existing id in array returns all the other existing correspondig campsites' => [[1,3,null,5], [1,3,5]]
        ];
    } 

    /**
     * @dataProvider arraysForInputAndExceptedFail
     */
     public function testCampsitesByIdFails(array $idsArray, array $idsForExpected ) : void {
        $comparisonElements = $this->innerFunctionSetUp($idsArray, $idsForExpected);
        $this->assertNotEquals($comparisonElements['expected'], $comparisonElements['actual']);
    } 

    public function arraysForInputAndExceptedFail(): array
    {
        return [
            'input does not get corresponding campsites in the right order' => [[1,3,5,8],[1,5,3,8]]
        ];
    } 

    protected function innerFunctionSetUp(array $idsArray, array $idsForExpected): array {
        $expected = $this->getArrayFromId($idsForExpected);
        $mockReturn = $this->getArrayFromObjectsId($idsArray);
    
        $mockRepository = $this->prophesize(CampsiteRepository::class);
        $mockRepository->findBy(Argument::any())->willReturn(...$mockReturn);

        $service = new SortCampsites($mockRepository->reveal());
        $actual = $service->sortCampsitesByIds($idsArray);
        
        return [ 'actual' => $actual, 'expected' => $expected];
    } 

    protected function getArrayFromId(array $ids): array {
        $campsites = [];
        foreach ($ids as $id) {
            $campsites []= (new Campsite())->setId($id);
        }
        return $campsites;
    }  

    protected function getArrayFromObjectsId(array $ids): array {
        $campsites = [];
        foreach ($ids as $id) {
            $campsites[] = $id ? [(new Campsite())->setId($id)] : null; 
        }
        return $campsites;
    }

}