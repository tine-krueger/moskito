import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

const mockSetAuthTokens = jest.fn()
const mockGetToken = jest.fn()

jest.mock('../../context/auth', () => ({
    ...jest.requireActual('../../context/auth'),
    useAuth: () => ({
        setAuthTokens: mockSetAuthTokens,
        getToken: mockGetToken
    }),
}))

describe('Navigation', () => {

    it('renders correctly', () => {
        const { container } = render(
        <MemoryRouter>
            <Navigation/>
        </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    it('Nav-Link changes style when hovered', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Navigation/>
            </MemoryRouter>
            )
        
        const bookmarksLink = getByTestId('bookmarks')
        userEvent.hover(bookmarksLink)
        
        expect(bookmarksLink).toHaveStyle('background: linear-gradient(145deg, #A2B2B0, #E2FAF6)')
    })

})