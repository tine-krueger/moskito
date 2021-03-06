<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\User;
use App\Entity\Campsite;
use App\Entity\CampsiteFeature;
use App\Service\BookmarkService;


class CampsiteSerializer {

    private array $elementAsArray = [];
    private object $bookmarkService;

    public function __construct(BookmarkService $bookmarkService) {
        $this->bookmarkService = $bookmarkService;
    }

    private function setArray($element, User $user): object {
        $featuresArray = [];
        $features = $element->getCampsiteFeatures();
        
        foreach($features as $feature) {
            $featuresArray[] = [
                'id' => $feature->getId(),
                'type' => $feature->getType(),
                'value' =>$feature->getValue()
            ];
        }
       

        $pinned = $this->bookmarkService->filterBookmark($element, $user);
       
        $this->elementAsArray[] = [
            'id' => $element->getId(),
            'name' => $element->getName(),
            'street' => $element->getStreet(),
            'postalCode' => $element->getPostalCode(),
            'place' => $element->getPlace(),
            'telephone' => $element->getTelephone(),
            'email' => $element->getEmail(),
            'web' => $element->getWeb(),
            'latitude' => $element->getLatitude(),
            'longitude' => $element->getLongitude(),
            'pinned' => $pinned,
            'features' => $featuresArray
        ];       
        return($this);
    }

    public function serialize($elements, User $user): string{
        if (is_array($elements)) {
            foreach($elements as $element) {
                $this->setArray($element, $user);
            }
        } else {
            $this->setArray($elements, $user);
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
            $classObject->setWeb($postData->web);
            $classObject->setLongitude($postData->longitude);
            $classObject->setLatitude($postData->latitude);

            $features = $postData->features;

            foreach($features as $feature) {
                
                $campsiteFeature = new CampsiteFeature();
                $campsiteFeature->setType($feature->name);
                $campsiteFeature->setValue($feature->isfeature);
                $classObject->addCampsiteFeature($campsiteFeature);
              
            }          
            return $classObject;
    }
}