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
const component = <Suggestions suggestions={suggestions} onClick={onClick}/>


describe('Suggestions', () => {

    it('renders correctly', () => {
        const { container } = render(component)
        expect(container).toMatchSnapshot()
    })

    it('shows the citys as suggestions', () => {
        const { getByText } = render(component)
        expect(getByText('Berlin')).toBeInTheDocument()
        expect(getByText('Hamburg')).toBeInTheDocument()
        expect(getByText('Wanne-Eikel')).toBeInTheDocument()
    })

    it('by onClick it calls function with the right city', () => {
        const { getByText } = render(component)
        userEvent.click(getByText('Berlin'))
        expect(onClick).toBeCalledTimes(1)
        expect(onClick).toBeCalledWith({label: "Berlin"})
        expect(onClick).not.toBeCalledWith({label: "Wanne-Eikel"})
    })

})