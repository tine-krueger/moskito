import { getFeatureBase } from './featureService'

export default function getInitialCampsiteFilter() {
    const initialFilter = 
        {
            name: 'Postleitzahl/Ort',
            dbName: 'postalCode',
            postalCode: '',
            distance: 100,
            latitude: -1,
            longitude: -1,
            features: getFeatureBase()
        }
    return initialFilter
}
