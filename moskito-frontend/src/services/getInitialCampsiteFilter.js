import { getFeatureBase } from './featureService'

export default function getInitialCampsiteFilter() {
    const initialFilter = 
        {
            name: 'PLZ/Ort',
            dbName: 'postalCode',
            postalCode: '',
            distance: 100,
            latitude: null,
            longitude: null,
            features: getFeatureBase()
        }
    return initialFilter
}
