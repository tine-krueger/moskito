<?php

namespace App\Serializer;

use App\Entity\Token;

class UserTokenSerializer {

    public function serialize($token) {

        return \json_encode([
            'value' => $token->getValue(),
            'validUntil' => $token->getValidUntil(),
            'user' => $token->getUser()->getId()
        ]);
    }
}