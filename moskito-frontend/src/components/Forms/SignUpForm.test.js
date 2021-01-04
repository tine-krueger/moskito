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

})