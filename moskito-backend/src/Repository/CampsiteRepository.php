<?php

namespace App\Repository;

use App\Entity\Campsite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Campsite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Campsite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Campsite[]    findAll()
 * @method Campsite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CampsiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Campsite::class);
    }

    public function save(Campsite $campsite): Campsite  {
        $this->_em->persist($campsite);
        $this->_em->flush();
        return $campsite;
    }


    // /**
    //  * @return Campsite[] Returns an array of Campsite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Campsite
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
