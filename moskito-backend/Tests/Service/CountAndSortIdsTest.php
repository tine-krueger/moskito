<?php  

namespace App\Tests\Service;

use App\Entity\Campsite;
use App\Service\CountAndSortIds;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;

class CountAndSortIdsTest extends TestCase 
{ 
    /**
     * @dataProvider filteredIds
     */
    public function testCountAndSortCampsiteIds(array $filteredIds, array $expectedSortedIds): void {
        $filteredCampsites = [];
        foreach ($filteredIds as $id) {
            $filteredCampsites [] = (new Campsite())->setId($id);
        }

        $expected = $expectedSortedIds;
        $service = new CountAndSortIds();
        $actual = $service->countAndSortCampsiteIds($filteredCampsites);

        $this->assertEquals($expected, $actual);
    }

    public function filteredIds(): array {
        return [
            [[1,4,6,3,1,4,7,9,4], [4,1,6,3,7,9]],
            [[],[]],
            [[9,1,8,2,7,3], [9,1,8,2,7,3]],
            [[6,3,6,4,3,7], [6,3,4,7]]
        ];
    }




}

