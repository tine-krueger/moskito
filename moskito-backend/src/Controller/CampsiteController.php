<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CampsiteRepository;
use App\Entity\Campsite;
use App\Serializer\CampsiteSerializer;
use App\Serializer\CampsiteFilterSerializer;
use App\Service\MatchingCampsites;
use App\Service\CountAndSortIds;
use App\Service\SortCampsites;
use App\Service\AuthenticationService;
use App\Service\ClosestCampsitesService;

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
        CampsiteFilterSerializer $filterSerializer,
        CampsiteSerializer $campsiteSerializer,
        MatchingCampsites $matchingCampsites,
        CountAndSortIds $sortIds,
        SortCampsites $sortCampsites,
        AuthenticationService $authentication,
        ClosestCampsitesService $closestCampsites
        ): JsonResponse {
            

            $user = $authentication->isValid($request);
            if (!$user) {
                return $this->json(['errors' => 'No access to this service!'], JsonResponse::HTTP_UNAUTHORIZED);
            }

            $filter = $filterSerializer->deserialize($request->getContent());
            
            if ($filter['latitude'] === null) {
                return $this->json(['errors'=> 'Place was not set!'], JsonResponse::HTTP_BAD_REQUEST);
            }
            $filteredCampsites = $matchingCampsites->getMatchingCampsites($filter);
            $sortedIds = $sortIds->countAndSortCampsiteIds($filteredCampsites);
            $sortedCampsites = $sortCampsites->sortCampsitesByIds($sortedIds);
            $sortedClosestCampsites = $closestCampsites->getClosestCampsites($filter, $sortedCampsites);

            return new JsonResponse(
                $campsiteSerializer->serialize($sortedClosestCampsites, $user),
                JsonResponse::HTTP_OK,
                [],
                true
            );    
    }
}
