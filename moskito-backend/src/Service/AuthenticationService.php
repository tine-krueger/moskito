<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use App\Repository\UserTokenRepository;
use App\Repository\UserRepository;
use App\Entity\User;

class AuthenticationService {
    private $tokenRepository;
    private $userRepository;

    public function __construct(UserTokenRepository $tokenRepository, UserRepository $userRepository) {
        $this->tokenRepository = $tokenRepository;
        $this->userRepository = $userRepository;
    }

    public function isValid(Request $request): bool {
        $authHeader = $request->headers->get('Authorization');
        $tokenValue = substr($authHeader, strpos($authHeader, ' ')+1);

        $token = $this->tokenRepository->findOneBy([
            'value' => $tokenValue
        ]);

        $now = new \DateTime();
        return !is_null($token) && $now < $token->getValidUntil();
    }
}