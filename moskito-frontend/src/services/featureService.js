export function filterFeatures(campsite) {
    const features =  campsite.features.filter(feature => feature.value)
    return features
}

export function nameReturn(feature) {
    const featureBase = getFeatureBase()
    const foundFeature = featureBase.find(baseFeature => baseFeature.dbName === feature.type )
    return foundFeature.name
}

function getFeatureBase() {
    const features = [
        {
            id: 1,
            name: 'kein W-Lan',
            dbName: 'wlan',
            isFeature: false
        },
        {
            id: 2,
            name: 'keine Bar/Diskothek',
            dbName: 'music',
            isFeature: false
        },
        {
            id: 3,
            name: 'keine Animation',
            dbName: 'animation',
            isFeature: false
        },
        {
            id: 4,
            name: 'Lagerfeuerstelle',
            dbName: 'fire',
            isFeature: false
        },
        {
            id: 5,
            name: 'Kies- oder Sandwege',
            dbName: 'path',
            isFeature: false
        },
        {
            id: 6,
            name: 'Bulli-Wiese',
            dbName: 'bulli',
            isFeature: false
        },
        {
            id: 7,
            name: 'Zeltbereiche',
            dbName: 'tents',
            isFeature: false
        },
        {
            id: 8,
            name: 'keine Parzellierung',
            dbName: 'subdevision',
            isFeature: false
        },
        {
            id: 9,
            name: 'wenig/keine Dauercamper',
            dbName: 'permanent',
            isFeature: false
        },
        {
            id: 10,
            name: 'mind. 80qm Standfläche',
            dbName: 'size',
            isFeature: false
        },
        {
            id: 11,
            name: 'Bio/Regionale Lebensmittel',
            dbName: 'bio',
            isFeature: false
        },
        {
            id: 12,
            name: 'Imbiss',
            dbName: 'snack',
            isFeature: false
        },
        {
            id: 13,
            name: 'Hunde erlaubt',
            dbName: 'animals',
            isFeature: false
        },
        {
            id: 14,
            name: 'Zugang zum See/Meer',
            dbName: 'seaside',
            isFeature: false
        },
        {
            id: 15, 
            name: 'Badestelle für Kinder',
            dbName: 'bathing',
            isFeature: false
        },
        {
            id: 16,
            name: 'mit Wald',
            dbName: 'forest',
            isFeature: false
        }
    ]  
    
    return features
}
