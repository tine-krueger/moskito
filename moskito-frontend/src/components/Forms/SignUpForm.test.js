import { render } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import SignUpForm from './SignUpForm'



describe('Sign Up Form', () => {

    it('renders correctly', () => {
        const { container } = render(<SignUpForm/>)
        expect(container).toMatchSnapshot()
    })

    it('shows password not equal text, if passwords are not the same', () => {
        const { getByPlaceholderText, queryByText } = render(<SignUpForm />)
        userEvent.type(getByPlaceholderText('Passwort'), 'SavePasswort')
        userEvent.type(getByPlaceholderText('Passwort Wiederholung'), 'UnsavePasswort')
        expect(queryByText('Die Passwörter stimmen nicht überein!')).toBeInTheDocument()
        expect(queryByText('Die Passwörter stimmen überein!')).not.toBeInTheDocument()
    })

    it('shows no password not equal text, if passwords are the same', () => {
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

    it('redirects if user is registered', () => {
        const mockIsRegistered = true
        const { getByTestId, queryByTestId } = render(
            <SignUpForm 
                isRegistered={mockIsRegistered}
            />
        )
        expect(getByTestId('redirect')).toBeInTheDocument()
        expect(queryByTestId('noredirect')).not.toBeInTheDocument()
    })

})