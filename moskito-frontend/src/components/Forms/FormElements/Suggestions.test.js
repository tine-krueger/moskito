import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Suggestions from './Suggestions'

const suggestions= [
    {label: 'Berlin'}, 
    {label: 'Hamburg'},
    {label: 'Wanne-Eikel'}
]
const onClick = jest.fn()

describe('Suggestions', () => {

    it('renders correctly', () => {
        const { container } = render(<Suggestions suggestions={suggestions} onClick={onClick}/>)
        expect(container).toMatchSnapshot()
    })

    it('shows the citys as suggestions', () => {
        const { getByText } = render(<Suggestions suggestions={suggestions} onClick={onClick}/>)
        expect(getByText('Berlin')).toBeInTheDocument()
        expect(getByText('Hamburg')).toBeInTheDocument()
        expect(getByText('Wanne-Eikel')).toBeInTheDocument()
    })

    it('by onClick it calls function with the right city', () => {
        const { getByText } = render(<Suggestions suggestions={suggestions} onClick={onClick}/>)
        userEvent.click(getByText('Berlin'))
        expect(onClick).toBeCalledWith({label: "Berlin"})
        expect(onClick).not.toBeCalledWith({label: "Wanne-Eikel"})
    })

})