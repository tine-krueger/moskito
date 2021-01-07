import campsiteBasisData from '../data/campsiteBasisData.json'

export function filterFeatures(campsite) {
    const features =  campsite.features.filter(feature => feature.value)
    return features
}

export function nameReturn(feature) {
    const foundFeature = campsiteBasisData.features.find(baseFeature => baseFeature.dbName === feature.type )
    return foundFeature.name
}
