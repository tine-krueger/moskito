<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\User;


class UserSerializer {

    private function setArray($element): object {
       
        $this->elementAsArray[] = [
            'id' => $element->getId(),
            'firstName' => $element->getFirstName(),
            'lastName' => $element->getLastName(),
            'email' => $element->getEmail(),
            'password' => $element->getPassword()
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
            
            $classObject = new User();
            $classObject->setFirstName($postData->firstName);
            $classObject->setLastName($postData->lastName);
            $classObject->setEmail($postData->email);
            $classObject->setPassword($postData->password);
         
            return $classObject;
    }
}