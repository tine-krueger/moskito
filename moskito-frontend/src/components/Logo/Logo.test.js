import { render } from '@testing-library/react'
import 'jest-styled-components'
import Logo from './Logo'

const inputPadding = '0.5em'

describe('Logo', () => {

    it('renders correctly', () => {
        const { container } = render(<Logo/>)
        expect(container).toMatchSnapshot()
    })

    it('has padding-top of 2em, if no inputPadding given', () => {
        const { getByTestId } = render(<Logo/>)
        expect(getByTestId('logo')).toHaveStyle('padding-top: 2em')
    })

    it('has padding-top of 0.5em, with given inputpadding of 0.5em', () => {
        const { getByTestId } = render(<Logo inputPadding={inputPadding}/>)
        expect(getByTestId('logo')).toHaveStyle('padding-top: 0.5em')
    })
})