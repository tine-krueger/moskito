import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import renderWithRouter from '../testSetup/setupTests'

jest.mock('../context/auth.js', () => ({
    ...jest.requireActual('../context/auth.js'),
    useAuth: () => ({
        setAuthTokens: jest.fn()
    })

}))
describe('Login', () => {
    it('renders correctly', () => {
        const { container } = render(<Login/>)
        expect(container).toMatchSnapshot()
    })

    it('has a headline, two buttons and two input-fields', () => {
        const { getByRole, getByTestId } =render(<Login/>)
        expect(getByRole('button', {name: /zurück/i})).toBeInTheDocument()
        expect(getByRole('button', {name: /Login/i})).toBeInTheDocument()
        expect(getByRole('heading', {name: /Login/i})).toBeInTheDocument()
        expect(getByRole('img', {name: /Moskito Logo/i})).toBeInTheDocument()
        expect(getByTestId('email')).toBeInTheDocument()
        expect(getByTestId('password')).toBeInTheDocument()
    })

    it('directs to landing-page after click on zurück-button', () => {
        const { history } = renderWithRouter(<Login/>)
        userEvent.click(screen.getByText(/Zurück/i))
        expect(history.location.pathname).toBe('/') 
    })

})