import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import Register from './Register'
import renderWithRouter from '../testSetup/setupTests'

jest.mock('../context/auth.js', () => ({
    ...jest.requireActual('../context/auth.js'),
    useAuth: () => ({
        setAuthTokens: jest.fn()
    })

}))
describe('Register', () => {
    it('renders correctly', () => {
        const { container } = render(<Register/>)
        expect(container).toMatchSnapshot()
    })

    it('has a headline, two buttons and two input-fields', () => {
        const { getByRole, getByTestId } =render(<Register/>)
        expect(getByRole('button', {name: /zurück/i})).toBeInTheDocument()
        expect(getByRole('button', {name: /Signup/i})).toBeInTheDocument()
        expect(getByRole('heading', {name: /Sign Up/i})).toBeInTheDocument()
        expect(getByRole('img', {name: /Moskito Logo/i})).toBeInTheDocument()
        expect(getByTestId('email')).toBeInTheDocument()
        expect(getByTestId('password')).toBeInTheDocument()
        expect(getByTestId('firstName')).toBeInTheDocument()
        expect(getByTestId('lastName')).toBeInTheDocument()
        expect(getByTestId('passwordControl')).toBeInTheDocument()
    })

    it('directs to landing-page after click on zurück-button', () => {
        const { history } = renderWithRouter(<Register/>)
        userEvent.click(screen.getByText(/Zurück/i))
        expect(history.location.pathname).toBe('/') 
    })

})