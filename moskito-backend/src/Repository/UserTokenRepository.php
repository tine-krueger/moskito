<?php

namespace App\Repository;

use App\Entity\UserToken;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserToken|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserToken|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserToken[]    findAll()
 * @method UserToken[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserTokenRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserToken::class);
    }

    public function create($user): UserToken{

        $validUntil = new \DateTime();
        $validUntil->modify('+1 day');


        $token = new UserToken();
        $token->setValue(uniqid('', true));
        $token->setValidUntil($validUntil);
        $token->setUser($user);

        $this->_em->persist($token);
        $this->_em->flush();
        
        return $token;
    }

    public function delete($token): void {

        $this->_em->remove($token);
        $this->_em->flush();
    }
}

