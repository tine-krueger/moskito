import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import Campsites from './Campsites'
import renderWithRouter from '../testSetup/setupTests'

const mockHeadline = 'Headline'
const mockCampsites = [{
    id: 1,
    name: 'Test Campsite',
    pinned: false,
    features: [
        {
            id: 1,
            type: 'wlan',
            value: true
        },
        {
            id: 2,
            type: 'music',
            value: false
        }
    ]    
}]
const mockIsLoading = false
const mockDeleteTokens = jest.fn()
const mocksetAuthTokens = jest.fn()

const component = <Campsites
    headline={mockHeadline}
    campsites={mockCampsites}
    isLoading={mockIsLoading}
    />

jest.mock('../context/auth.js', () => ({
    ...jest.requireActual('../context/auth.js'),
    useAuth: () => ({
        deleteTokens: mockDeleteTokens,
        setAuthTokens: mocksetAuthTokens
    })
}))

describe('Campsites Page', () => {
    it('renders correctly', () => {
        const { container } = renderWithRouter(component)
        expect(container).toMatchSnapshot()
    })

    it('shows a headline, one campsite with like-button and the right true-features and a navigation', () => {
        const { getByRole, getByText, queryByText, getByTestId } = renderWithRouter(component)
        expect(getByRole('heading', {name: /Headline/i})).toBeInTheDocument()
        expect(getByRole('heading', {name: /Test Campsite/i})).toBeInTheDocument()
        expect(getByText(/kein W-Lan/i)).toBeInTheDocument()
        expect(queryByText(/keine Bar/i)).not.toBeInTheDocument()
        expect(getByTestId('like-button')).toBeInTheDocument()
        expect(getByRole('navigation')).toBeInTheDocument()

    })

    it('shows only the loading-spinner, when loading is true', () => {
        const { getByTestId, queryByRole } = renderWithRouter(
            <Campsites
            headline={mockHeadline}
            campsites={mockCampsites}
            isLoading={true}
            />
        )
        expect(getByTestId('loading-spinner')).toBeInTheDocument()
        expect(queryByRole('heading', {name: /Test Campsite/i})).not.toBeInTheDocument()
    })

    it('shows errors, when errors are existing', () => {
        const { queryByRole, getByText } = renderWithRouter(
            <Campsites
            headline={mockHeadline}
            campsites={mockCampsites}
            isLoading={mockIsLoading}
            errors={{errors: 'It has errors'}}
            />
        )
        expect(getByText(/It has Errors/i)).toBeInTheDocument()
        expect(queryByRole('heading', {name: /Test Campsite/i})).not.toBeInTheDocument()
    })

    it('navigates to bookmarks-page, when clicking on nav-button', () => {
        const { getByTestId, history } = renderWithRouter(component)
        userEvent.click(getByTestId('bookmarks'))
        expect(history.location.pathname).toBe('/bookmarks')
    })

    it('navigates to find-campsites-page, when clicking on nav-button', () => {
        const { getByTestId, history } = renderWithRouter(component)
        userEvent.click(getByTestId('find-campsite'))
        expect(history.location.pathname).toBe('/find-campsite')
    })

    it('logs out by deleting tokens, when clicking on nav-button', () => {
        const { getByTestId } = renderWithRouter(component)
        userEvent.click(getByTestId('logout'))
        expect(mocksetAuthTokens).toHaveBeenCalledTimes(1)
        expect(mockDeleteTokens).toHaveBeenCalledTimes(1)
    })
})