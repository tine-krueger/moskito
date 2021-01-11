import { render } from '@testing-library/react'
import 'jest-styled-components'
import NotFound from './NotFound'

describe('Not Found', () => {
  it('renders correctly', () => {
    const { container } = render(<NotFound/>)
    expect(container).toMatchSnapshot()
  })
})