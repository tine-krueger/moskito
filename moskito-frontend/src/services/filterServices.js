import loadToken from './loadToken'
import { makeFetch } from '../lib/fetch'

export function setFilter(features) {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const tokenValue = loadToken()
    const myHeaders = {
        "Authorization": `Bearer ${tokenValue}`,
        "Content-Type": "application/json"
    }

    return makeFetch(features, 'POST', myHeaders, `${baseUrl}/campsite-filter`)
   
}

export function getTrueFilter(filter) {
    const trueFeatures = filter.features.filter(feature => feature.isFeature)
    return trueFeatures
}
