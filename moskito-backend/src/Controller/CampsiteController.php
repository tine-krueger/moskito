<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

//use Doctrine\Common\Collections\ArrayCollection;
//use Doctrine\Common\Collections\Collection;
use App\Repository\CampsiteRepository;
use App\Repository\CampsiteFeatureRepository;
use App\Entity\Campsite;
use App\Serializer\CampsiteSerializer;

class CampsiteController extends AbstractController
{
    /**
     * @Route("/campsite", methods={"GET"})
     */
    public function index(Request $request, CampsiteRepository $campsiteRepository, SerializerInterface $serializer): JsonResponse
    {
        $campsites = $campsiteRepository->findAll();
        $campfeatures = [];

       /* foreach($campsites as $campsite) {
            $campfeatures[] = $campsite->getCampsiteFeatures();
        };
        
        var_dump($campfeatures);
        die;*/

        return new JsonResponse(
            $serializer->serialize($campsites, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/campsite", methods={"POST"})
     */

    public function create(
        Request $request, 
        CampsiteRepository $campsiteRepository, 
        CampsiteFeatureRepository $featureRepository,
        CampsiteSerializer $serializer
        ): JsonResponse {
    
            $campsite = $serializer->deserialize($request->getContent());
            $campsiteRepository->save($campsite);
           // $featureRepository->save($campsite['feature']);

    
            return new JsonResponse(
                $serializer->serialize($campsite),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }
}
