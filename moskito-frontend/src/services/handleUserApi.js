import { makeFetch } from '../lib/fetch'

export function signUserIn(data) {
    const baseUrl = "http://moskito.local/register"
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return makeFetch(data, 'POST', myHeaders, baseUrl)
}
