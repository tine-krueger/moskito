import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterCampsiteCheckbox from './FilterCampsiteCheckbox'

const feature = 
    {
        id: 1,
        dbName: 'wlan',
        isFeature: false,
        name: 'kein W-Lan'
    }
const filter = {
    features: [
        feature
    ]
}
const setFilter = jest.fn()

const component = <FilterCampsiteCheckbox
feature={feature}
filter={filter}
setFilter={setFilter}
/>

describe('Filter Campsite Checkbox', () => {
    
    it('displays the dbName as label', () => {
        const { getByLabelText } = render(component)
        expect(getByLabelText('kein W-Lan')).toBeInTheDocument()
    })

    it('checkbox will be checked after click and setFilter will be called', () => {
        const { getByTestId } = render(component)
        userEvent.click(getByTestId(feature.dbName))
        expect(getByTestId(feature.dbName)).toBeChecked()
        expect(setFilter).toBeCalledTimes(1)

    })
})
