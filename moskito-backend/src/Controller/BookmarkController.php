<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\CampsiteRepository;
use App\Serializer\BookmarkSerializer;
use App\Service\AuthenticationService;

class BookmarkController extends AbstractController
{
    /**
     * @Route("/bookmark", methods={"GET"})
     */
    public function index( Request $request, AuthenticationService $authentication ): JsonResponse
    {
        if (!$authentication->isValid($request)) {
            return $this->json(['error' => 'Not authorized'], JsonResponse::HTTP_UNAUTHORIZED);
        }


        return new JsonResponse(
            $serializer->serialize(),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


    /**
     * @Route("/bookmark", methods={"POST"})
     */
    public function toggle(
        Request $request, 
        AuthenticationService $authentication,
        BookmarkSerializer $bookmarkSerializer,
        UserRepository $userRepository,
        CampsiteRepository $campsiteRepository
        ): JsonResponse {

            /*if (!$authentication->isValid($request)) {
                return $this->json(['error' => 'Not authorized'], JsonResponse::HTTP_UNAUTHORIZED);
            }*/
            $bookmark = $bookmarkSerializer->deserialize($request->getContent());
            $user = $userRepository->findOneBy(['id' => $bookmark['userId']]);
            $campsite = $campsiteRepository->findOneBy(['id' => $bookmark['campsiteId']]);
            $user->addCampsite($campsite);

            var_dump($user);
            die;

            
            
            
            return new JsonResponse(
                $serializer->serialize(),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }

}