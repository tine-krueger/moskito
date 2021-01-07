import { render } from '@testing-library/react'
import 'jest-styled-components'
import RedParagraph from './RedParagraph'

const mockChildren = 'This is a nice text!'
let mockTextAlign = 'center'
const component = <RedParagraph 
children={mockChildren}
textAlign={mockTextAlign}
/>

describe('RedParagraph', () => {
    it('renders correctly', () => {
        const { container } = render(component)
        expect(container).toMatchSnapshot()
    })

    it('shows the right text', () => {
        const { getByText } = render(component)
        expect(getByText('This is a nice text!')).toBeInTheDocument()
    })

    it('changes text-align', () => {
        const{ getByTestId} = render(<RedParagraph textAlign='left' children={mockChildren}/>)
        expect(getByTestId('eyecatcher')).toHaveStyle('text-align: left') 
    })

})