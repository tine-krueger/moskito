<?php

namespace App\Utils;

use App\Repository\CampsiteFeatureRepository;



class MatchingCampsites {

    private $featureRepository;

    public function __construct(CampsiteFeatureRepository $featureRepository) {
        $this->featureRepository = $featureRepository;
    }

    public function getMatchingCampsites(array $filteredFeatures):array {
        $filteredCampsites = [];
        foreach($filteredFeatures as $filteredFeature) {
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