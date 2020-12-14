import { makeFetch } from '../lib/fetch'
import { loadFromLocal } from '../lib/localStorage'

export function bookmark(id) {
    const token = loadFromLocal('tokens')
    const baseUrl = `http://moskito.local/bookmark/${id}`
    const myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token.value}`);

    makeFetch('', 'POST', myHeaders, baseUrl)   
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}




  