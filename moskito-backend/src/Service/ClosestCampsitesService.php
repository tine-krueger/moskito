<?php 


namespace App\Service;

class ClosestCampsitesService {

    const EARTH_RADIUS = 6371;
    const DISTANCE = 100;

    private array $closestCampsites;
    
    public function getClosestCampsites( array $filter, array $sortedCampsites): array {

        $latFrom = deg2rad($filter['latitude']);
        $lonFrom = deg2rad($filter['longitude']);

        foreach ($sortedCampsites as $campsite) {
            $latTo = deg2rad($campsite->getLatitude());
            $lonTo = deg2rad($campsite->getLongitude());

            $latDelta = $latDelta = $latTo - $latFrom;
            $lonDelta = $lonTo - $lonFrom;

            $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) + cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));
            $distance = $angle * self::EARTH_RADIUS;

            if ( $distance < self::DISTANCE ) {
                $this->closestCampsites[] = $campsite;
            }
        }
        
        return $this->closestCampsites;
        
    }
}
