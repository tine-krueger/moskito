<?php

namespace App\Serializer;

use App\Entity\UserToken;

class UserTokenSerializer {

    public function serialize($token) {

        return \json_encode([
            'value' => $token->getValue(),
            'validUntil' => $token->getValidUntil(),
            'user' => $token->getUser()->getId()
        ]);
    }

    public function deserialize($content) {
        $postDate = $postData = \json_decode($content);
            
        $classObject = new UserToken();
        $classObject->setValue($postData->value);
     
        return $classObject;
    }
}