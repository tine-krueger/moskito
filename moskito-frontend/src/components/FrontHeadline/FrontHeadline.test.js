import { render } from '@testing-library/react'
import 'jest-styled-components'
import FrontHeadline from './FrontHeadline'

const children = 'Headline'

describe('FrontHeadline', () => {

    it('renders correctly', () => {
        const { container } = render(<FrontHeadline children={children}/>)
        expect(container).toMatchSnapshot()
    })

    it('displays the given headline', () => {
        const { getByText } = render(<FrontHeadline children={children}/>)
        expect(getByText('Headline')).toBeInTheDocument()
    })

})