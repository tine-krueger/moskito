<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\CampsiteFeature;


class CampsiteFeatureSerializer {
    
    public function deserialize($content) {
            $featureArray = [];
            
            $filteredFeatures = \json_decode($content);
            foreach($filteredFeatures as $feature) {

                    $campsiteFeature = new CampsiteFeature();
                    $campsiteFeature->setType($feature->dbName);
                    $campsiteFeature->setValue($feature->isFeature);
                    
                    $featureArray[] = $campsiteFeature;
            }  

            return $featureArray;
    }
}