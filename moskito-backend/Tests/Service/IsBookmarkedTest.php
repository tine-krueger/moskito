<?php  

namespace App\Tests\Service;

use App\Entity\User;
use App\Entity\Campsite;
use App\Service\BookmarkService;
use App\Repository\CampsiteRepository;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;

class IsBookmarkedTest extends TestCase
{ 

    private $prophet;
    /**
     * @dataProvider expectationsWithIds
     */
    public function testIsBookmarked(array $campsiteIds, int $campsiteId, bool $expected ): void 
    {   
        
        $mockRepository = $this->prophet->prophesize(CampsiteRepository::class);

        $user = new User();
        foreach ($campsiteIds as $id) {
            $user->addCampsite((new Campsite())->setId($id));
        }

        $service = new BookmarkService($mockRepository->reveal());
        $actual = $service->isBookmarked($user, $campsiteId);
        $this->assertEquals($expected, $actual);


    }

    public function expectationsWithIds() 
    {
        return [
            'camp-id is found in user campsite collection' => [[1, 2, 3], 2, true],
            'user has noch camp-collection, id not found' => [[], 1, false],
            'user has camp-collection, bis camp-id is not found' => [[1, 2, 3, 4], 5, false]
        ];
    }

    protected function setUp(): void {
        $this->prophet = new \Prophecy\Prophet;
    }

}