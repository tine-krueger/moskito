import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import InputField from './InputField'


const mockOnChange = jest.fn()
const component = <InputField 
type='text' 
name='address' 
value='anystreet' 
onChange={mockOnChange} 
placeholder='name of street' 
children='Address'
/>

const componentMargin = <InputField 
type='text' 
name='address' 
value='anystreet' 
onChange={mockOnChange} 
placeholder='name of street' 
children='Address'
marginBottom='sm'
/>

describe('InputField', () => {
    it('renders correctly', () => {
        const { container } = render(component)
        expect(container).toMatchSnapshot()
    })

    it('shows right label', () => {
        const { queryByLabelText } = render(component)
        expect(queryByLabelText('Address')).toBeTruthy()
        expect(queryByLabelText('address')).toBeFalsy()
    })

    it('with no margin-prop has margin bottom of 1em', () => {
        const { getByTestId } = render(component)
        expect(getByTestId('input-field')).toHaveStyle('margin-bottom: 1em')
    })

    it('with margin-prop has margin bottom of .5em', () => {
        const { getByTestId } = render(componentMargin)
        expect(getByTestId('input-field')).toHaveStyle('margin-bottom: .5em')
    })

    it('calls onChange-function, when user types something in', () => {
        const { getByTestId } = render(component)
        userEvent.type(getByTestId('address'), 'Nicestreet 1')
        expect(mockOnChange).toHaveBeenCalledTimes(12)
    }) 
})