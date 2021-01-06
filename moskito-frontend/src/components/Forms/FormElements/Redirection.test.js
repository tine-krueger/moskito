import { render, screen, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import Redirection from './Redirection'
import renderWithRouter from '../../../testSetup/setupTests'

jest.setTimeout(7000)

describe('Redirection', () => {

    it('renders correctly', () => {
        const { container } = render(<Redirection/>)
        expect(container).toMatchSnapshot()
    })

    it('redirects after 2.5 seconds', async() => {
        const { history } = renderWithRouter(<Redirection />)
        await waitFor(() => expect(history.location.pathname).toEqual('/login'), {timeout: 3000})
    })

    

})