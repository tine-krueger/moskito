<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CampsiteRepository;
use App\Entity\Campsite;
use App\Serializer\CampsiteSerializer;

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
            /*$allCampsites = $campsiteRepository->findAll();

            foreach($allCampsites as $singleCampsites) {
                if( $singleCampsites->getPostalCode() === $campsite->getPostalCode() 
                    && $singleCampsites->getStreet() === $campsite->getStreet()) {
                        return $this->json(["setting Campsite"=>false], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
                }
            }*/

            $campsiteRepository->save($campsite);

            return new JsonResponse(
                $serializer->serialize($campsite),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }
}
