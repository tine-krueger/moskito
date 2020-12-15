import {useState} from 'react'
import { setFeatureFilter, getTrueFilter }from '../services/filterServices'
import { loadFromLocal } from '../lib/localStorage'
import { getBookmarks } from '../services/handleBookmarkApi'

const token = loadFromLocal('tokens')


export default function useCampsites() {

    const [ campsites, setCampsites ] = useState([])
    const [ bookmarks, setResponseBookmarks ] = useState([])
   

    function getCampsites(filter) {
        const trueFilter = getTrueFilter(filter)
        setFeatureFilter(trueFilter)
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
