import { render } from '@testing-library/react'
import 'jest-styled-components'
import Logo from './Logo'

const inputMargin = '2em'

describe('Logo', () => {

    it('renders correctly', () => {
        const { container } = render(<Logo/>)
        expect(container).toMatchSnapshot()
    })

    it('has margin-top of 4em, of not inputMargin given', () => {
        const { getByTestId } = render(<Logo/>)
        expect(getByTestId('logo')).toHaveStyle('margin-top: 4em')
    })

    it('has margin-top of 2em, with given inputMargin of 2em', () => {
        const { getByTestId } = render(<Logo inputMargin={inputMargin}/>)
        expect(getByTestId('logo')).toHaveStyle('margin-top: 2em')
    })
})