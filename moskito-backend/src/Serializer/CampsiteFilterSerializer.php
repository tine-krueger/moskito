<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\CampsiteFeature;


class CampsiteFilterSerializer {
    
    public function deserialize(string $content): array {
            
            $featureArray = [];
            $filterData = \json_decode($content);
            
            foreach($filterData->trueFeatures as $feature) {

                    $campsiteFeature = new CampsiteFeature();
                    $campsiteFeature->setType($feature->dbName);
                    $campsiteFeature->setValue($feature->isFeature);
                    
                    $featureArray[] = $campsiteFeature;
            } 
            
            $filter = [
                    'latitude' => $filterData->latitude,
                    'longitude' => $filterData->longitude,
                    'distance' => $filterData->distance,
                    'trueFeatures' => $featureArray
            ];

            return $filter;
    }
}