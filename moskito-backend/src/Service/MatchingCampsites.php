<?php

namespace App\Service;

use App\Repository\CampsiteFeatureRepository;



class MatchingCampsites {

    private $featureRepository;

    public function __construct(CampsiteFeatureRepository $featureRepository) {
        $this->featureRepository = $featureRepository;
    }

    public function getMatchingCampsites(array $filter): array {
        
        $filteredCampsites = [];
        foreach($filter['trueFeatures'] as $filteredFeature) {
            $features = $this->featureRepository->findBy(
                    [
                        'type' => $filteredFeature->getType(),
                        'value' => $filteredFeature->getValue() 
                    ]
                );
                $filteredCampsites = $this->getCampsitesFromFeatures($filteredCampsites, $features);
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