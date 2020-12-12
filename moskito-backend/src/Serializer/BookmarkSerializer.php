<?php

namespace App\Serializer;

class BookmarkSerializer {
    private array $bookmark = [];

    public function deserialize(string $content): array {
        $postData = \json_decode($content);

        $this->bookmark= [
            'userId' => $postData->userId,
        ];
    
        return $this->bookmark;
    }
}