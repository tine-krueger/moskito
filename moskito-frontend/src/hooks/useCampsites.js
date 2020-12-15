import {useState} from 'react'
import { setFilter, getTrueFilter }from '../services/filterServices'
import { getBookmarks } from '../services/handleBookmarkApi'

export default function useCampsites() {

    const [ campsites, setCampsites ] = useState([])
    const [ bookmarks, setResponseBookmarks ] = useState([])
   

    function getCampsites(filter) {
        const trueFilter = getTrueFilter(filter)
        const filterData = {
            latitude: filter.latitude, 
            longitude: filter.longitude, 
            distance: filter.distance,
            trueFeatures: trueFilter}
        setFilter(filterData)
        .then(result => setCampsites(result))
        .catch(error => {
            console.log('error', error)
        })
      }
      
    function setBookmarks(){
        getBookmarks()
        .then(result => {setResponseBookmarks(result)
        console.log(result)})
        .catch(error => console.log('error', error));
    }
    
    return  { campsites, bookmarks, getCampsites, setBookmarks}
 
}
