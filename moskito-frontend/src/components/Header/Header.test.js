import { render } from '@testing-library/react'
import 'jest-styled-components'
import Header from './Header'

describe('Header', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Header>Your Favourites</Header>)
    expect(container.firstChild).toMatchSnapshot()
    expect(getByText(/Your Favourites/i)).toBeInTheDocument()
  })
})