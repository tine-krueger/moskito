import { makeFetch } from '../lib/fetch'

export function bookmark(token, id) {
    const baseUrl = `http://moskito.local/bookmark/${id}`
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    makeFetch('', 'POST', myHeaders, baseUrl)   
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
