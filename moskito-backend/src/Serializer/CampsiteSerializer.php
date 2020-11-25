<?php 

namespace App\Serializer;

use App\Entity\Campsite;
use App\Entity\CampsiteFeature;

class CampsiteSerializer {

    private $elementAsArray = [];

    private function setArray($element): object {
        $this->elementAsArray[] = [
            'name' => $element->getName(),
            'street' => $element->getStreet(),
            'postalCode' => $element->getPostalCode(),
            'place' => $element->getPlace(),
            'telephone' => $element->getTelephone(),
            'email' => $element->getEmail(),
            'latitude' => $element->getLatitude(),
            'longitude' => $element->getLongitude(),
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

    public function deserialize($content){

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

            $campsiteFeature = new CampsiteFeature();
            $campsiteFeature->setType(CampsiteFeature::TYPE_WLAN);
            $campsiteFeature->setValue($postData->value);
            $campsiteFeature->setCampsite($classObject);


            return ['campsite' => $classObject, 'feature' => $campsiteFeature];

    }
}