<?php

namespace App\Serializer;

use App\Entity\UserToken;

class ViolationsSerializer {

   
    private array $serializedViolations = [];

    public function serialize(object $violations): string {

        foreach ($violations as $violation) {
            $errorMessage = $violation->getPropertyPath() . ': '  . $violation->getMessage();
            $this->serializedViolations[] = $errorMessage;
        }

        return \json_encode(['errors' => $this->serializedViolations]);
    }
}