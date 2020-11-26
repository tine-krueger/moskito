<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Campsite;
use App\Entity\CampsiteFeature;


class CampsiteSerializer {

    private $elementAsArray = [];

    private $featureNames = [
        'wlan' => CampsiteFeature::TYPE_WLAN,  
        'music' => CampsiteFeature::TYPE_MUSIC,
        'animation' => CampsiteFeature::TYPE_ANIMATION,
        'fire' => CampsiteFeature::TYPE_FIRE,
        'path' => CampsiteFeature::TYPE_PATH,
        'bulli' => CampsiteFeature::TYPE_BULLI,
        'tents' => CampsiteFeature::TYPE_TENTS,
        'subdevision' => CampsiteFeature::TYPE_SUBDEVISION,  
        'permanent' => CampsiteFeature::TYPE_PERMANENT,
        'size' => CampsiteFeature::TYPE_SIZE,
        'bio' => CampsiteFeature::TYPE_BIO,
        'snack' => CampsiteFeature::TYPE_SNACK,
        'animals' => CampsiteFeature::TYPE_ANIMALS,  
    ];

    private function setArray($element): object {
        $featuresArray = [];
        $features = $element->getCampsiteFeatures();
        
        foreach($features as $feature) {
            $featuresArray[] = [
                'id' => $feature->getId(),
                'type' => $feature->getType(),
                'value' =>$feature->getValue()
            ];
        }
       
        $this->elementAsArray[] = [
            'id' => $element->getId(),
            'name' => $element->getName(),
            'street' => $element->getStreet(),
            'postalCode' => $element->getPostalCode(),
            'place' => $element->getPlace(),
            'telephone' => $element->getTelephone(),
            'email' => $element->getEmail(),
            'latitude' => $element->getLatitude(),
            'longitude' => $element->getLongitude(),
            'features' => $featuresArray
        ];       
        return($this);
    }

    public function serialize($elements){
        if (is_array($elements)) {
            foreach($elements as $element) {
                $this->setArray($element);
            }
        } else {
            $this->setArray($elements);
        }
        
        return \json_encode($this->elementAsArray);
    }
    
    public function deserialize($content) {
            
            $postData = \json_decode($content);
            
            $classObject = new Campsite();
            $classObject->setName($postData->name);
            $classObject->setStreet($postData->street);
            $classObject->setPostalCode($postData->postalCode);
            $classObject->setPlace($postData->place);
            $classObject->setTelephone($postData->telephone);
            $classObject->setEmail($postData->email);
            $classObject->setLongitude($postData->longitude);
            $classObject->setLatitude($postData->latitude);

            $features = $postData->features;

            foreach($features as $feature) {
                
                $campsiteFeature = new CampsiteFeature();
                $campsiteFeature->setType($this->featureNames[$feature->name]);
                $campsiteFeature->setValue($feature->isfeature);
                $classObject->addCampsiteFeature($campsiteFeature);
              
            }          
            return $classObject;
    }
}