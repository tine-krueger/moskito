<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use App\Repository\UserTokenRepository;
use App\Entity\User;

class AuthenticationService {
    private $tokenRepository;

    public function __construct(UserTokenRepository $tokenRepository) {
        $this->tokenRepository = $tokenRepository;
    }

    public function isValid(Request $request): ?User {
        $authHeader = $request->headers->get('Authorization');
        $requestedToken = substr($authHeader, strpos($authHeader, ' ')+1);

        if (!$requestedToken)
            {
                return null;
            }

        $foundToken = $this->tokenRepository->findOneBy([
            'value' => $requestedToken
        ]);

        if (!$foundToken)
            {
                return null;
            }
        
        $user = $foundToken->getUser();
        $now = new \DateTime();
        
        if ($foundToken->getValidUntil() < $now)
            {
                return null;
            }

        return $user;
    }
}
