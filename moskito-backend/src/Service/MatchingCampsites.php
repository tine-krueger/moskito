<?php

namespace App\Service;

use App\Repository\CampsiteFeatureRepository;
use App\Repository\CampsiteRepository;



class MatchingCampsites {

    private $featureRepository;
    private $campsiteRepository;

    public function __construct(CampsiteFeatureRepository $featureRepository, CampsiteRepository $campsiteRepository) {
        $this->featureRepository = $featureRepository;
        $this->campsiteRepository = $campsiteRepository;
    }

    public function getMatchingCampsites(array $filter): array {
        
        $filteredCampsites = [];

        if (empty($filter['trueFeatures'] )) {
            $filteredCampsites = $this->campsiteRepository->findAll();
        } else {
            foreach($filter['trueFeatures'] as $filteredFeature) {
                $features = $this->featureRepository->findBy(
                        [
                            'type' => $filteredFeature->getType(),
                            'value' => $filteredFeature->getValue() 
                        ]
                    );

                $filteredCampsites = $this->getCampsitesFromFeatures($filteredCampsites, $features);
 
            }
        }
        return $filteredCampsites;
    }

    private function getCampsitesFromFeatures(array $filteredCampsites, array $features): array{
        foreach($features as $feature) {
            $filteredCampsites[] = $feature->getCampsite();
        }
        return $filteredCampsites;
    }
}