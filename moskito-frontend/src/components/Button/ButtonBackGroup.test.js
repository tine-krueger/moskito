import { render } from '@testing-library/react'
import ButtonBackGroup from './ButtonBackGroup'

const text1 = "Log in"
const text2 = "Zurück"
const onClick = jest.fn()

const component = <ButtonBackGroup
text1={text1}
text2={text2}
onClick={onClick}
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

})
