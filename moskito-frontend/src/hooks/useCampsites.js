import {useState} from 'react'
import { setFilter, getTrueFilter }from '../services/filterServices'
import {  getFetch } from '../lib/fetch'
import { loadFromLocal } from '../lib/localStorage'

const token = loadFromLocal('tokens')


export default function useCampsites() {

    const [ campsites, setCampsites ] = useState([])
    const [ bookmarks, setBookmarks ] = useState([])
   

    function getCampsites(filter) {
        const trueFilter = getTrueFilter(filter)
        const filterData = {
            latitude: filter.latitude, 
            longitude: filter.longitude, 
            trueFeatures: trueFilter}
        console.log(filterData)
        setFilter(filterData)
        .then(result => setCampsites(result))
        .catch(error => {
            console.log('error', error)
        })
      }
      
    function getBookmarks(){
        const baseUrl = "http://moskito.local/bookmark"
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token.value}`);
        getFetch( myHeaders, baseUrl)
        .then(result => {setBookmarks(result)
        console.log(result)})
        .catch(error => console.log('error', error));
    }
    
    return  { campsites, bookmarks, getCampsites, getBookmarks}
 
}
