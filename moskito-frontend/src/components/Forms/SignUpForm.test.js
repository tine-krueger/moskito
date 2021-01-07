import { render, screen, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import SignUpForm from './SignUpForm'
import renderWithRouter from '../../testSetup/setupTests'

jest.setTimeout(7000)

describe('Sign Up Form', () => {

    it('renders correctly', () => {
        const { container } = render(<SignUpForm/>)
        expect(container).toMatchSnapshot()
    })

    it('shows password-not-equal-text, if passwords are not the same', () => {
        const { getByPlaceholderText, queryByText } = render(<SignUpForm />)
        userEvent.type(getByPlaceholderText('Passwort'), 'SavePasswort')
        userEvent.type(getByPlaceholderText('Passwort Wiederholung'), 'UnsavePasswort')
        expect(queryByText('Die Passwörter stimmen nicht überein!')).toBeInTheDocument()
        expect(queryByText('Die Passwörter stimmen überein!')).not.toBeInTheDocument()
    })

    it('shows no password-not-equal-text, if passwords are the same', () => {
        const { getByPlaceholderText, queryByText } = render(<SignUpForm />)
        userEvent.type(getByPlaceholderText('Passwort'), 'SavePasswort')
        userEvent.type(getByPlaceholderText('Passwort Wiederholung'), 'SavePasswort')
        expect(queryByText('Die Passwörter stimmen nicht überein!')).not.toBeInTheDocument()
    })

    it('shows errors, if errors exist', () => { 
        const mockErrors = ['It has errors', 'It has more errors']
        const { getByText } = render(
            <SignUpForm 
                loginErrors={mockErrors}
            />
        )
        expect(getByText('It has errors')).toBeInTheDocument()
        expect(getByText('It has more errors')).toBeInTheDocument()
    })

    it('shows redirection hint if user registration was successful and redirects after 2.5 seconds', async() => {
        const mockIsRegistered = true
        const { history } = renderWithRouter(
            <SignUpForm isRegistered={mockIsRegistered}/>
        )
        expect(screen.getByTestId('redirect')).toBeInTheDocument()
        expect(screen.queryByTestId('noredirect')).not.toBeInTheDocument()
        await waitFor(() => expect(history.location.pathname).toEqual('/login'), {timeout: 3000})
    })

    it('calls handleSubmit with the right parameters', () => {
        const mockUserRegistration = jest.fn()
        const isPasswordEqual = true
        const { getByPlaceholderText, getByText } = render(
            <SignUpForm 
                userRegistration={mockUserRegistration}
            />
        )
        userEvent.type(getByPlaceholderText('Vorname'), 'Jane')
        userEvent.type(getByPlaceholderText('Nachname'), 'Doe')
        userEvent.type(getByPlaceholderText('E-Mail'), 'jane@doe.de')
        userEvent.type(getByPlaceholderText('Passwort'), 'qwer12!')
        userEvent.type(getByPlaceholderText('Passwort Wiederholung'), 'qwer12!')
        userEvent.click(getByText('SignUp'))

        expect(mockUserRegistration).toHaveBeenCalled()
        expect(mockUserRegistration).toHaveBeenCalledWith(
            isPasswordEqual,
            {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'jane@doe.de',
                password: 'qwer12!',
                passwordControl: 'qwer12!'
            })
    })

    it('pushes back, when button "Zurück" is clicked', () => {
        const { history } = renderWithRouter(<SignUpForm/>)
        userEvent.click(screen.getByText('Zurück'))
        expect(history.location.pathname).toEqual('/')
        expect(history.location.pathname).not.toEqual('/testroute')
    })

})