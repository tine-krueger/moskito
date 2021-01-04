<?php declare(strict_types=1);

namespace App\Service;

use App\Repository\CampsiteRepository;



class SortCampsites {

    private $campsiteRepository;

    public function __construct(CampsiteRepository $campsiteRepository) {
        $this->campsiteRepository = $campsiteRepository;
    }

    public function sortCampsitesByIds(array $sortedIds): array {
        $sortedCampsites = [];
        foreach($sortedIds as $id) {
            $campsiteObj = $this->campsiteRepository->findBy(
                    [
                        'id' => $id
                    ]
                );

            $campsiteObj !== null &&  $sortedCampsites[] = $campsiteObj[0];
        }
        return $sortedCampsites;
    }
}