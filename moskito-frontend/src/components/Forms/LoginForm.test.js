import { render } from '@testing-library/react'
import 'jest-styled-components'
import LoginForm from './LoginForm'

const mockSetAuthTokens = jest.fn()
const mockGetToken = jest.fn()

jest.mock('../../context/auth', () => ({
    ...jest.requireActual('../../context/auth'),
    useAuth: () => ({
        setAuthTokens: mockSetAuthTokens,
        getToken: mockGetToken
    }),
}))

describe('LoginForm', () => {

    it('renders correctly', () => {
        const { container } = render(<LoginForm/>)
        expect(container).toMatchSnapshot()
    })

})