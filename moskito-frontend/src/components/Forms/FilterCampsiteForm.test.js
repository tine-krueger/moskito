import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import FilterCampsiteForm from './FilterCampsiteForm'
import getInitialCampsiteFilter from '../../services/getInitialCampsiteFilter'
//import { useFilterForm } from '../../hooks/useFilterForm'
//import * as hooks from '../../hooks/useFilterForm'


const mockGetCampsites = jest.fn()
const mockHistoryPush = jest.fn()
const mockInputs = getInitialCampsiteFilter()
let mockSuggestions = []
const mockHandleCheckboxChange = jest.fn()
const mockHandleSubmit = jest.fn()
const mockHandleChange = jest.fn()
const mockHandleLocationChange = jest.fn()
const mockHandleClick = jest.fn()


jest.mock('../../hooks/useFilterForm.js', () => ({
    useFilterForm: () => ({
      inputs: mockInputs,
      suggestions: mockSuggestions,
      handleCheckboxChange: mockHandleCheckboxChange,
      handleSubmit: mockHandleSubmit,
      handleChange: mockHandleChange,
      handleLocationChange: mockHandleLocationChange,
      handleClick: mockHandleClick
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  }))

const component = <FilterCampsiteForm 
getCampsites={mockGetCampsites}
/>

describe('Filter Campsite Form', () => {
    it('renders correctly', () => {
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
    
    it('shows all required input fields with initial values', () => {
      const { getByTestId } = render(component)
      expect(getByTestId('postalCode').value).toBe('')
      expect(getByTestId('distance').value).toEqual('100')
    })

    it('displays a button for submitting the form', () => {
      const { getByRole } = render(component)
      expect(getByRole('button', {name: 'Campingplätze finden' })).toBeInTheDocument()
    })

    it('calls ChangeHandlers, when user types something in', () => {
      const { getByTestId } = render(component)
      userEvent.type(getByTestId('postalCode'), 'Hamburg')
      userEvent.type(getByTestId('distance'), '50')
      expect(mockHandleLocationChange).toHaveBeenCalledTimes(7)
      expect(mockHandleChange).toHaveBeenCalledTimes(2)
    })

    it('calls SubmitHandler when clicking the Button', () => {
      mockHandleSubmit.mockImplementation(event => {
        event.preventDefault()
      })
      const { getByTestId, getByText } = render(component)
      userEvent.type(getByTestId('postalCode'), 'Hamburg')
      userEvent.type(getByTestId('distance'), '50')
      userEvent.click(getByText('Campingplätze finden'))
      expect(mockHandleSubmit).toHaveBeenCalledTimes(1)
      
    })

    it('shows suggestions, when they are not empty', () => {
      mockSuggestions = [{label: 'Place 1'}, {label: 'Place 2'}]
      const { getByText } = render(component)
      expect(getByText('Place 1')).toBeInTheDocument()
      expect(getByText('Place 2')).toBeInTheDocument()
    })

    
})