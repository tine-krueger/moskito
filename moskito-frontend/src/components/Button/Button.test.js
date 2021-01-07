import { render } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import Button from './Button'


const mockOnClick = jest.fn()

describe('Button', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Button>Click Me!</Button>)
    expect(container.firstChild).toMatchSnapshot()
    expect(getByText(/Click Me!/i)).toBeInTheDocument()
  })

  it('calls onClick, when Button in clicked', () => {
    const { getByText } = render(<Button onClick={mockOnClick} children={'Click Me!'}/>)
    userEvent.click(getByText('Click Me!'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})