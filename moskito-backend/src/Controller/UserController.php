<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
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
        UserSerializer $serializer,
        ValidatorInterface $validator
        ): JsonResponse {
    
            $user = $serializer->deserialize($request->getContent());
            $emailExists = $userRepository->findBy(['email' => $user->getEmail()]);

            if(sizeof($emailExists) > 0) {
                return $this->json(["userRegistration"=>false], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
            }

            $errors = $validator->validate($user);
            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors], JsonResponse::HTTP_BAD_REQUEST);
            }
            
            $userRepository->save($user);
            
            return new JsonResponse(
                $serializer->serialize($user),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }

}
