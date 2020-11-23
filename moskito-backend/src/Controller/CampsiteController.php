<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CampsiteRepository;
use App\Entity\Campsite;

class CampsiteController extends AbstractController
{
    /**
     * @Route("/campsite", methods={"GET"})
     */
    public function index(Request $request, CampsiteRepository $campsiteRepository): JsonResponse
    {
        $campsites = $campsiteRepository->findAll();

        $campsitesJson = [];
        foreach($campes as $camp) {
            $campsitesJson[] = [
                'name' => $camp->getName(),
                'street' => $camp->getStreet(),
                'postalCode' => $camp->getPostalCode(),
                'place' => $camp->getPlace(),
                'telephone' => $camp->getTelephone(),
                'email' => $camp->getEmail(),
                'coordinates' => $camp->getCoordinates()
            ];
        }

        
        return new JsonResponse(
            // $serializer->serialize($campsites, 'json'),
            \json_encode($campsitesJson),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
