<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CampsiteRepository;
use App\Repository\CampsiteFeatureRepository;
use App\Entity\Campsite;
use App\Serializer\CampsiteSerializer;
use App\Serializer\CampsiteFeatureSerializer;

class CampsiteController extends AbstractController
{
    /**
     * @Route("/campsite", methods={"GET"})
     */
    public function index(Request $request, CampsiteRepository $campsiteRepository, CampsiteSerializer $serializer): JsonResponse
    {
        $campsites = $campsiteRepository->findAll();
    
        return new JsonResponse(
            $serializer->serialize($campsites),
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
        CampsiteSerializer $serializer
        ): JsonResponse {
    
            $campsite = $serializer->deserialize($request->getContent());
            $campsiteExists = $campsiteRepository->findBy(
                [
                    'postalCode' => $campsite->getPostalCode(),
                    'street' => $campsite->getStreet()
                ]
            );

            if(sizeof($campsiteExists) > 0) {
                return $this->json(["campsiteRegistration"=>false], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
            }

            $campsiteRepository->save($campsite);

            return new JsonResponse(
                $serializer->serialize($campsite),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }

    /**
     * @Route("/campsite-filter", methods={"POST"})
     */

    public function filter(
        Request $request,
        CampsiteRepository $campsiteRepository,
        CampsiteFeatureRepository $featureRepository,
        CampsiteFeatureSerializer $featureSerializer,
        CampsiteSerializer $campsiteSerializer
        ): JsonResponse {
            $filteredFeatures = $featureSerializer->deserialize($request->getContent());
            $filteredCampsites = [];

            foreach($filteredFeatures as $filteredFeature) {
                $features = $featureRepository->findBy(
                        [
                            'type' => $filteredFeature->getType(),
                            'value' => $filteredFeature->getValue() 
                        ]
                    );
                foreach($features as $feature) {
                    $filteredCampsites[] = $feature->getCampsite();
                }
            }

            $filteredCampsitesIds = [];
            foreach ($filteredCampsites as $campsite) {
                $filteredCampsitesIds[] = $campsite->getId();
            }

            $countElements = array_count_values($filteredCampsitesIds);
            arsort($countElements);
            $sortedIds = array_keys($countElements);

            $sortedCampsites = [];
            foreach($sortedIds as $Id) {
                $sortedCampsites[] = $campsiteRepository->findBy(
                        [
                            'id' => $Id
                        ]
                    );
            }

            /*var_dump($filteredCampsites);
            var_dump($sortedCampsites);
            var_dump($sortedIds);
            die;*/

            return new JsonResponse(
                $campsiteSerializer->serialize($sortedCampsites),
                JsonResponse::HTTP_OK,
                [],
                true
            );    
    }
}
