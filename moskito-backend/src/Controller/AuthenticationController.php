<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Serializer\UserTokenSerializer;
use App\Repository\UserRepository;
use App\Repository\UserTokenRepository;
use App\Entity\User;
use App\Entity\UserToken;


class AuthenticationController extends AbstractController
{
    /**
     * @Route("/login", methods={"POST"})
     */
    public function token(
        Request $request, 
        UserTokenSerializer $tokenSerializer,
        UserRepository $userRepository,
        UserTokenRepository $tokenRepository
         ): JsonResponse {
        $post = json_decode($request->getContent(), true);
        $user = $userRepository->login($post['email'], $post['password']);
        

        if(is_null($user)) {
            return $this->json(["success"=>false], JsonResponse::HTTP_UNAUTHORIZED);
        };

        $token = $tokenRepository->create($user);
        

        return new JsonResponse(
            $tokenSerializer->serialize($token),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/logout", methods={"DELETE"})
     */

    public function deleteToken(
        Request $request,
        UserTokenRepository $tokenRepository,
        UserTokenSerializer $tokenSerializer
    ): JsonResponse {
        $token = $tokenSerializer->deserialize($request->getContent());
        $tokenExists = $tokenRepository->findOneBy(
            [
                'value' => $token->getValue()
            ]
        );

        if($tokenExists === null) {
            return $this->json(["tokenDelete"=>false], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }
        
        $tokenRepository->delete($tokenExists);

        return new JsonResponse(
            json_encode(["tokenDeleted"=>true]),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}