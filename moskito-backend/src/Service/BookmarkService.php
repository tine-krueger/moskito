<?php

namespace App\Service;
use App\Entity\User;
use App\Repository\CampsiteRepository;

class BookmarkService {

    private bool $bookmark;
    private $campsiteRepository;

    public function __construct(CampsiteRepository $campsiteRepository) {
        $this->bookmark = false;
        $this->campsiteRepository = $campsiteRepository;
    }

    public function isBookmarked(User $user, int $id): bool {
        $userCampsites = $user->getCampsite();

        foreach( $userCampsites as $userCampsite) {
            if( $id === $userCampsite->getId()) {
                $this->bookmark = true;
                break;
            } 
        }

        return $this->bookmark;
 
    }

    public function toggleBookmark(int $id, bool $isBookmarked, User $user): void {

        $campsite = $this->campsiteRepository->findOneBy(['id' => $id]);
        if( $isBookmarked) {
            $user->removeCampsite($campsite);
        } else {
            $user->addCampsite($campsite);
        }

    }
}