<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\CampsiteRepository;
use App\Serializer\UserSerializer;
use App\Serializer\CampsiteSerializer;
use App\Service\AuthenticationService;
use App\Service\BookmarkService;

class BookmarkController extends AbstractController
{
    /**
     * @Route("/bookmark", methods={"GET"})
     */
    public function index( Request $request, AuthenticationService $authentication, CampsiteSerializer $serializer): JsonResponse
    {   

        $user = $authentication->isValid($request);
        if (!$user) {
            return $this->json(['error' => 'Not authorized'], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $campsites = $user->getCampsite();
        $campsitesAsArray = [];
        foreach($campsites as $campsite) {
            $campsitesAsArray[] = $campsite;
        }

        return new JsonResponse(
            $serializer->serialize($campsitesAsArray),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


    /**
     * @Route("/bookmark/{id}", methods={"POST"})
     */
    public function toggle(
        int $id,
        Request $request, 
        AuthenticationService $authentication,
        UserRepository $userRepository,
        UserSerializer $serializer,
        BookmarkService $bookmarkService
        ): JsonResponse {

            $user = $authentication->isValid($request);
            
            if (!$user) {
                return $this->json(['error' => 'Not authorized'], JsonResponse::HTTP_UNAUTHORIZED);
            }

            $isBookmarked = $bookmarkService->isBookmarked( $user, $id);
            $bookmarkService->toggleBookmark( $id, $isBookmarked, $user);
            
            $userRepository->save($user);

            return new JsonResponse(
                $serializer->serialize($user),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }

}