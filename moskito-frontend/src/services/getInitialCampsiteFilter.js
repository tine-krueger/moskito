import { getFeatureBase } from './featureService'

export default function getInitialCampsiteFilter() {
    const initialFilter = 
        {
            name: 'Postleitzahl/Ort',
            dbName: 'postalCode',
            postalCode: '',
            latitude: -1,
            longitude: -1,
            features: getFeatureBase()
        }
    return initialFilter
}
