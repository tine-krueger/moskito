import { screen } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import Landing from './Landing'
import renderWithRouter from '../testSetup/setupTests'

describe('Landing', () => {
    it('renders correctly', () => {
        const { container } = renderWithRouter(<Landing/>)
        expect (container).toMatchSnapshot()
    })

    it('has a headline and two buttons', () => {
        const { getByRole, getByTestId } = renderWithRouter(<Landing/>)
        expect(getByRole('button', {name: /Login/i})).toBeInTheDocument()
        expect(getByRole('button', {name: /Signup/i})).toBeInTheDocument()
        expect(getByRole('heading', {name: /Camping back to the roots/i})).toBeInTheDocument()
        expect(getByTestId('logo')).toBeInTheDocument()
    })

    it('directs to sign-up-page after click on signup-button', () => {
        const { history } = renderWithRouter(<Landing/>)
        userEvent.click(screen.getByText(/SignUp/i))
        expect(history.location.pathname).toBe('/signup') 
    })

    it('directs to login-page after click on login-button', () => {
        const { history } = renderWithRouter(<Landing/>)
        userEvent.click(screen.getByText(/Login/i))
        expect(history.location.pathname).toBe('/login') 
    })

})