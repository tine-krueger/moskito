export function setFeatureFilter(features) {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify(features)

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    }

    return fetch("http://moskito.local/campsite-filter", requestOptions)
        .then(response => response.json())
}

export function getTrueFilter(filter) {
    const trueFeatures = filter.features.filter(feature => feature.isFeature)
    return trueFeatures
}


