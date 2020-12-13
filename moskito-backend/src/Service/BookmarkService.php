<?php

namespace App\Service;


use Doctrine\Common\Collections\Criteria;
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

    public function findBookmark($element, User $user): bool {
        $users = $element->getUsers();
        $criteria = Criteria::create()
        ->where(Criteria::expr()->eq("id", $user->getId()))
        ->orderBy(array("id" => Criteria::ASC))
        ->setFirstResult(0)
        ->setMaxResults(1);

        $matchingUser = $users->matching($criteria);

        $pinned = false;
        if (count($matchingUser) > 0 ) {
            $pinned = true;
        }

        return $pinned;
    }
}