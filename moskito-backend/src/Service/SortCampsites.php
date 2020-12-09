<?php

namespace App\Service;

use App\Repository\CampsiteRepository;



class SortCampsites {

    private $campsiteRepository;

    public function __construct(CampsiteRepository $campsiteRepository) {
        $this->campsiteRepository = $campsiteRepository;
    }

    public function sortCampsitesByIds(array $sortedIds):array {
        $sortedCampsites = [];
        foreach($sortedIds as $Id) {
            $campsiteObj = $this->campsiteRepository->findBy(
                    [
                        'id' => $Id
                    ]
                );
            $sortedCampsites[] = $campsiteObj[0];
        }
        return $sortedCampsites;
    }
}