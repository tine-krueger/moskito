import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'
import renderWithRouter from '../../testSetup/setupTests'

describe('LoginForm', () => {

    it('renders correctly', () => {
        const { container } = render(<LoginForm/>)
        expect(container).toMatchSnapshot()
    })

    it('shows errors, if isError is truthy', () => { 
        const mockIsError = true
        const { getByText } = render(
            <LoginForm
                isError={mockIsError}
            />
        )
        expect(getByText('E-Mail oder Password-Eingabe nicht korrekt!')).toBeInTheDocument()
    })

    it('does not show errors, if isError is falsy', () => { 
        const mockIsError = false
        const { queryByText } = render(
            <LoginForm
                isError={mockIsError}
            />
        )
        expect(queryByText('E-Mail oder Password-Eingabe nicht korrekt!')).not.toBeInTheDocument()
    })

    it('redirects to find-campsite after successful login', () => { 
        const mockIsLoggedIn = true
        const { history } = renderWithRouter(
            <LoginForm
                isLoggedIn={mockIsLoggedIn}
            />
        )
        expect(history.location.pathname).toEqual('/find-campsite')
    })

    it('does not redirect to find-campsite after failed login', () => { 
        const mockIsLoggedIn = false
        const { history } = renderWithRouter(
            <LoginForm
                isLoggedIn={mockIsLoggedIn}
            />
        )
        expect(history.location.pathname).toEqual('/testroute')
    })

    it('calls userLogin with the right parameters', () => { 
        const mockUserLogin = jest.fn()
        const { getByPlaceholderText, getByText  } = render(
            <LoginForm
                userLogin={mockUserLogin}
            />
        )
        userEvent.type(getByPlaceholderText('E-Mail'), 'jane@doe.de')
        userEvent.type(getByPlaceholderText('Passwort'), '1234qwer!')
        userEvent.click(getByText('Login'))

        expect(mockUserLogin).toHaveBeenCalled()
        expect(mockUserLogin).toHaveBeenCalledWith({
            email: 'jane@doe.de',
            password: '1234qwer!'
        })
    })

    it('pushes back, when button "Zurück" is clicked', () => {
        const { history } = renderWithRouter(<LoginForm/>)
        userEvent.click(screen.getByText('Zurück'))
        expect(history.location.pathname).toEqual('/')
        expect(history.location.pathname).not.toEqual('/testroute')
    })

})