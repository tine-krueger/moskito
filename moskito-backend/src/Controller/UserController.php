<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Entity\User;
use App\Serializer\UserSerializer;

class UserController extends AbstractController
{
    /**
     * @Route("/user", methods={"GET"})
     */
    public function index( UserRepository $userRepository, UserSerializer $serializer ): JsonResponse
    {
        $users = $userRepository->findAll();


        return new JsonResponse(
            $serializer->serialize($users),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }


    /**
     * @Route("/register", methods={"POST"})
     */
    public function register(
        Request $request, 
        UserRepository $userRepository, 
        UserSerializer $serializer
        ): JsonResponse {
    
            $user = $serializer->deserialize($request->getContent());
            $allUsers = $userRepository->findAll();
            
            foreach($allUsers as $singleUser) {
                if( $singleUser->getEmail() === $user->getEmail()){
                    return $this->json(["userRegistration"=>false], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
                }
            };
            
            $userRepository->save($user);

            return new JsonResponse(
                $serializer->serialize($user),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }

}
