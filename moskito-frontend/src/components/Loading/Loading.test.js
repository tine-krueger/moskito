import { render } from '@testing-library/react'
import 'jest-styled-components'
import Loading from './Loading'

describe('Loading', () => {
  it('renders correctly', () => {
    const { container } = render(<Loading/>)
    expect(container.firstChild).toMatchSnapshot()
  })
})