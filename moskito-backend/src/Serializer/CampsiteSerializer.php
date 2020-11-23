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
            $campsite = new Campsite();
            $campsite->setName($postData->name);
            $campsite->setStreet($postData->street);
            $campsite->setPostalCode($postData->postalCode);
            $campsite->setPlace($postData->place);
            $campsite->setTelephone($postData->telephone);
            $campsite->setEmail($postData->email);
            $campsite->setCoordinates($postData->coordinates);

            return $campsite;

    }
}