import { makeFetch } from '../lib/fetch'
import { loadFromLocal } from '../lib/localStorage'

const token = loadFromLocal('tokens')

export function bookmark(id) {
    const baseUrl = `http://moskito.local/bookmark/${id}`
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token.value}`);
    makeFetch('', 'POST', myHeaders, baseUrl)   
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}




  