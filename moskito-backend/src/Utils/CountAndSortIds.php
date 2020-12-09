<?php

namespace App\Utils;

class CountAndSortIds {


    public function countAndSortCampsiteIds(array $filteredCampsites):array {

        $filteredCampsitesIds = [];
        foreach ($filteredCampsites as $campsite) {
            $filteredCampsitesIds[] = $campsite->getId();
        }

        $countElements = array_count_values($filteredCampsitesIds);
        arsort($countElements);

        return array_keys($countElements);   
    }
}