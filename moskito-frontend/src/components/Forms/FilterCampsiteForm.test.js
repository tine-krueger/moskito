import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import FilterCampsiteForm from './FilterCampsiteForm'


const getCampsitesMock = jest.fn()
const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  }))
const component = <FilterCampsiteForm 
getCampsites={getCampsitesMock}
/>

describe('Filter Campsite Form', () => {
    it('renders correctly', () => {
        const { container } = render(component)
        expect(container).toMatchSnapshot()
    })
    
    it('displays the dbName as label', () => {
        const { getByLabelText } = render(component)
        expect(getByLabelText('kein W-Lan')).toBeInTheDocument()
    })
    
    it('change errors on click', () => {
        const changeErrors = jest.fn()
        const { getByRole } = render(component)
        const handleClick = jest.spyOn(React, 'useState')
        handleClick.mockImplementation(errors => [errors, changeErrors])
        userEvent.click(getByRole('button'))
        expect(changeErrors).toBeTruthy()
    })

})