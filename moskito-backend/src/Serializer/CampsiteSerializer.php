<?php 

namespace App\Serializer;

use App\Entity\Campsite;

class CampsiteSerializer {
    public function serialize($elements){
        $Json = [];
        if (is_array($elements)) {
            foreach($elements as $element) {
                $Json[] = [
                    'name' => $element->getName(),
                    'street' => $element->getStreet(),
                    'postalCode' => $element->getPostalCode(),
                    'place' => $element->getPlace(),
                    'telephone' => $element->getTelephone(),
                    'email' => $element->getEmail(),
                    'coordinates' => $element->getCoordinates()
                ];
            }
        } else {
            $Json[] = [
                'name' => $elements->getName(),
                'street' => $elements->getStreet(),
                'postalCode' => $elements->getPostalCode(),
                'place' => $elements->getPlace(),
                'telephone' => $elements->getTelephone(),
                'email' => $elements->getEmail(),
                'coordinates' => $elements->getCoordinates()
            ];
        }
        
        return \json_encode($Json);
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
            $classObject->setCoordinates($postData->coordinates);

            return $classObject;

    }
}