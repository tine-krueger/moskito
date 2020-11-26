<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Campsite;
use App\Entity\CampsiteFeature;


class CampsiteSerializer {

    private $elementAsArray = [];

    private $featureNames = [
        ['name' => CampsiteFeature::TYPE_WLAN,
         'key' => 'wlan'   
        ],
        ['name' => CampsiteFeature::TYPE_MUSIC,
         'key' => 'music'   
        ],
        ['name' => CampsiteFeature::TYPE_ANIMATION,
         'key' => 'animation'   
        ],
        ['name' => CampsiteFeature::TYPE_FIRE,
         'key' => 'fire'   
        ],
        ['name' => CampsiteFeature::TYPE_PATH,
         'key' => 'path'   
        ],
        ['name' => CampsiteFeature::TYPE_BULLI,
         'key' => 'bulli'   
        ],
        ['name' => CampsiteFeature::TYPE_TENTS,
         'key' => 'tents'   
        ],
        ['name' => CampsiteFeature::TYPE_SUBDEVISION,
         'key' => 'subdevision'   
        ],
        ['name' => CampsiteFeature::TYPE_PERMANENT,
         'key' => 'permanent'   
        ],
        ['name' => CampsiteFeature::TYPE_SIZE,
         'key' => 'size'   
        ],
        ['name' => CampsiteFeature::TYPE_BIO,
         'key' => 'bio'   
        ],
        ['name' => CampsiteFeature::TYPE_SNACK,
         'key' => 'snack'   
        ],
        ['name' => CampsiteFeature::TYPE_ANIMALS,
         'key' => 'animals'   
        ],
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

            foreach($this->featureNames as $featureName) {
                $campsiteFeature = new CampsiteFeature();
                $campsiteFeature->setType($featureName['name']);
                $key = $featureName['key'];
                $campsiteFeature->setValue($postData->features->$key);
                $classObject->addCampsiteFeature($campsiteFeature);
            }           
            return $classObject;
    }
}