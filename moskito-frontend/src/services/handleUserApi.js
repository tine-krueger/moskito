import { makeFetch } from '../lib/fetch'

export function signUserIn(data) {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return makeFetch(data, 'POST', myHeaders, `${baseUrl}/register`)
}
