<?php

namespace App\Serializer;

use App\Entity\Token;

class UserTokenSerializer {

    public function serialize($token){
        $elementsAsArray[] = [
            'value' => $token->getValue(),
            'validUntil' => $token->getValiduntil(),
            'user' => $token->getUser()->getId()
        ] ; 
        return \json_encode($elementsAsArray);
    }
}