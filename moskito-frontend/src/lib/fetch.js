export function makeFetch(data, method, myHeaders, url) {

    const raw = JSON.stringify(data)
    const requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        }
        
    try {    
        return fetch(url, requestOptions)
        .then(response => response.json())
    } catch (error) {
        return { error: 'Server does not answer!'}
    } 
}

export function getFetch(myHeaders, url) {
    
    const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    }

    try {    
        return fetch(url, requestOptions)
        .then(response => response.json())
    } catch (error) {
        return { error: 'Server does not answer!'}
    } 
}

