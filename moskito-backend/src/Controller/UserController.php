<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Repository\UserRepository;
use App\Serializer\UserSerializer;
use App\Serializer\ViolationsSerializer;
use App\Service\AuthenticationService;
use App\Service\PasswordEncoder;

class UserController extends AbstractController
{
    /**
     * @Route("/user", methods={"GET"})
     */
    public function index( Request $request, UserRepository $userRepository, UserSerializer $serializer, AuthenticationService $authentication ): JsonResponse
    {
        if (!$authentication->isValid($request)) {
            return $this->json(['error' => 'Not authorized'], JsonResponse::HTTP_UNAUTHORIZED);
        }

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
        ViolationsSerializer $violationsSerializer,
        ValidatorInterface $validator, 
        PasswordEncoder $passwordEncoder
        ): JsonResponse {
    
            $newUser = $serializer->deserialize($request->getContent());
            $emailExists = $userRepository->findBy(['email' => $newUser->getEmail()]);

            if(sizeof($emailExists) > 0) {
                return $this->json(['errors'=>'This E-Mail is already registered.'], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
            }

            $errors = (array)  $validator->validate($newUser);
            
            if (count($errors) > 0) {
                return new JsonResponse($violationsSerializer->serialize($errors), JsonResponse::HTTP_BAD_REQUEST, [], true );
            } 

            $passwordEncoder->encode($newUser->getPassword(), $newUser);
            $userRepository->save($newUser);
            
            return new JsonResponse(
                $serializer->serialize($newUser),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }

}
