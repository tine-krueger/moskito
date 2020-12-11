export function makeFetch(data, method, myHeaders, url) {

    const raw = JSON.stringify(data)
    const requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        }
    
    return fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.statusText)
            }
        })
}