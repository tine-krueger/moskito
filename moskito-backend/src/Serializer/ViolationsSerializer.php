<?php 

namespace App\Serializer;

class ViolationsSerializer {

   
    private array $serializedViolations = [];

    public function serialize(array $violations): string {

        foreach ($violations as $violation) {
            $errorMessage = $violation['propertyPath'] . ': '  . $violation['message'];
            $this->serializedViolations[] = $errorMessage;
        }

        return \json_encode(['errors' => $this->serializedViolations]);
    }
}