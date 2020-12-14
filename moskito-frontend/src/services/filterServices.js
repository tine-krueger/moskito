import loadToken from './loadToken'
import { makeFetch } from '../lib/fetch'

export function setFilter(features) {
    const baseUrl = "http://moskito.local/campsite-filter"
    const tokenValue = loadToken()
    const myHeaders = new Headers()

    myHeaders.append("Authorization", `Bearer ${tokenValue}`)
    myHeaders.append("Content-Type", "application/json")

    return makeFetch(features, 'POST', myHeaders, baseUrl)
   
}

export function getTrueFilter(filter) {
    const trueFeatures = filter.features.filter(feature => feature.isFeature)
    return trueFeatures
}
