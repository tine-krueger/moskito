<?php

namespace App\Repository;

use App\Entity\CampsiteFeature;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CampsiteFeature|null find($id, $lockMode = null, $lockVersion = null)
 * @method CampsiteFeature|null findOneBy(array $criteria, array $orderBy = null)
 * @method CampsiteFeature[]    findAll()
 * @method CampsiteFeature[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CampsiteFeatureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CampsiteFeature::class);
    }

    public function save(CampsiteFeature $feature): CampsiteFeature  {
        $this->_em->persist($feature);
        $this->_em->flush();
        return $feature;
    }



}
