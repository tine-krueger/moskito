import { render } from '@testing-library/react'
import 'jest-styled-components'
import FilterCampsiteForm from './FilterCampsiteForm'

const getCampsitesMock = jest.fn()

describe('Filter Campsite Form', () => {
    
    it('displays the dbName as label', () => {
        const { getByLabelText } = render(<FilterCampsiteForm 
            getCampsites={getCampsitesMock}
            errors = "It has errors!"
            />
        )
        expect(getByLabelText('kein W-Lan')).toBeInTheDocument()
    }) 
})