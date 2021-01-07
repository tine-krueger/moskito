import featureBasisData from '../data/featureBasisData.json'

export default function getInitialCampsiteFilter() {
    const initialFilter = 
        {
            name: 'PLZ/Ort',
            dbName: 'postalCode',
            postalCode: '',
            distance: 100,
            latitude: null,
            longitude: null,
            features: featureBasisData
        }
    return initialFilter
}
