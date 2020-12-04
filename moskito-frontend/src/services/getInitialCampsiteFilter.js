import { getFeatureBase } from './featureService'

export default function getInitialCampsiteFilter() {
    const initialFilter = 
        {
            name: 'Postleitzahl/Ort',
            dbName: 'postalCode',
            postalCode: '',
            features: getFeatureBase()
        }
    return initialFilter
}
