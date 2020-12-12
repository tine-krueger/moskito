<?php

namespace App\Service;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Repository\UserRepository;

class LoginService {

    private $passwordEncoder;
    private $userRepository;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, UserRepository $userRepository) {
        $this->passwordEncoder = $passwordEncoder;  
        $this->userRepository = $userRepository;  
    }

    public function login(string $email, string $password): array {
        $user = $this->userRepository->findOneBy(['email' => $email]);
        if (!$user) 
        {
            return $userData = [ 'isValid' => false ];
        }
        $isValid = $this->passwordEncoder->isPasswordValid($user, $password);
        $userData = [ 'isValid' => $isValid, 'user' => $user ];
    
        return $userData;
    }
}