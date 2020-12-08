import loadToken from './loadToken'

export function setFeatureFilter(features) {
    const tokenValue = loadToken()
    const myHeaders = new Headers()

    myHeaders.append("Authorization", `Bearer ${tokenValue}`)
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify(features)

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    }

    return fetch("http://moskito.local/campsite-filter", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.statusText)
            }
        })
}

export function getTrueFilter(filter) {
    const trueFeatures = filter.features.filter(feature => feature.isFeature)
    return trueFeatures
}


