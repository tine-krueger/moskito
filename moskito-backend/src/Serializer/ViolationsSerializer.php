<?php 

namespace App\Serializer;

class ViolationsSerializer {

   
    private array $serializedViolations = [];

    public function serialize(array $violations): string {
    
        foreach ($violations as $violation) {
            $property = $violation->getPropertyPath();
            $message = $violation->getMessage();
            $errorMessage = $property . ': '  . $message;
            $this->serializedViolations[] = $errorMessage;
        }

        return \json_encode(['errors' => $this->serializedViolations]);
    }
}