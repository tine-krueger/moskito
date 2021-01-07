import { render } from '@testing-library/react'
import 'jest-styled-components'
import ButtonBackGroup from './ButtonBackGroup'
import userEvent from '@testing-library/user-event'

const text1 = "Log in"
const text2 = "Zurück"
const mockOnClick = jest.fn()

const component = <ButtonBackGroup
text1={text1}
text2={text2}
onClick={mockOnClick}
/>

describe('Filter Campsite Checkbox', () => {
    it('renders correctly', () => {
        const { container } = render(component)
        expect(container).toMatchSnapshot()
    })

    it('shows Button texts', () => {
        const { getByText } = render(component)
        expect(getByText(/Log in/i)).toBeInTheDocument()
        expect(getByText(/Zurück/i)).toBeInTheDocument() 
    })

    it('does not show other texts', () => {
        const { queryByText } = render(component)
        expect(queryByText('Log out')).not.toBeInTheDocument()
        expect(queryByText(/Zuruck/i)).not.toBeInTheDocument() 
    })

    it('calls mockOnClick, when text2-button is clicked', () => {
        const { getByText } = render(component)
        userEvent.click(getByText('Zurück'))
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

})
