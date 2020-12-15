import { makeFetch, getFetch } from '../lib/fetch'
import { loadFromLocal } from '../lib/localStorage'

export function bookmark(id) {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = loadFromLocal('tokens')
    const myHeaders = { "Authorization": `Bearer ${token.value}` }
    
    makeFetch('', 'POST', myHeaders, `${baseUrl}/bookmark/${id}`)   
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

export function getBookmarks() {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = loadFromLocal('tokens')
    const myHeaders = { "Authorization": `Bearer ${token.value}` }
    
    return getFetch( myHeaders, `${baseUrl}/bookmark`)
}




  