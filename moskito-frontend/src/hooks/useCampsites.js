import { useState } from 'react'
import { setFilter, getTrueFilter }from '../services/filterServices'
import { getBookmarks } from '../services/handleBookmarkApi'

export function useCampsites() {

    const [ campsites, setCampsites ] = useState([])
    const [ bookmarks, setResponseBookmarks ] = useState()
    const [ errors, setErrors ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)
   
    function getCampsites(filter) {
        const trueFilter = getTrueFilter(filter)
        const filterData = {
            latitude: filter.latitude, 
            longitude: filter.longitude, 
            distance: filter.distance,
            trueFeatures: trueFilter}
        setFilter(filterData)
        .then( result => {
            if (result.errors) {
                setErrors(result)
                setCampsites([])
                setTimeout(() => setIsLoading(false), 2000)
            } else {
                setCampsites(result)
                setErrors()
                setTimeout(() => setIsLoading(false), 2000)
            } 
        })
        .catch(error => {
            console.log('error', error)
        })
      }

    function setBookmarks(){
        getBookmarks()
        .then(result => {
            setResponseBookmarks(result)
            setTimeout(() => setIsLoading(false), 1000)
            console.log(result)})
        .catch(error => console.log('error', error));
    }

    return  { errors, campsites, bookmarks, isLoading, getCampsites, setIsLoading, setBookmarks }
}
