import { render } from '@testing-library/react'
import 'jest-styled-components'
import Button from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Button>Click Me!</Button>)
    expect(container.firstChild).toMatchSnapshot()
    expect(getByText(/Click Me!/i)).toBeInTheDocument()
  })
})