import {useState} from 'react'
import { setFeatureFilter, getTrueFilter }from '../services/filterServices'


export default function useCampsites() {

    const [ campsites, setCampsites ] = useState([])

    function getCampsites(filter) {
        const trueFilter = getTrueFilter(filter)
            setFeatureFilter(trueFilter)
            .then(result => setCampsites(result))
            .catch(error => console.log('error', error))
      }
    

    

    return  { campsites, getCampsites }
 
}
