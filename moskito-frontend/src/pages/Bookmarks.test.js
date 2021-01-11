import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import Bookmarks from './Bookmarks'
import renderWithRouter from '../testSetup/setupTests'

const mockHeadline = 'Headline'
const mockBookmarks = 
[
    {
        id: 1,
        name: 'Test Campsite',
        pinned: true,
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
    },
    {
        id: 2,
        name: 'An other Campsite',
        pinned: true,
        features: [
            {
                id: 1,
                type: 'wlan',
                value: false
            },
            {
                id: 2,
                type: 'music',
                value: true
            }
        ]    
    }
]
let mockIsLoading = false
const mockDeleteTokens = jest.fn()
const mocksetAuthTokens = jest.fn()

const component = <Bookmarks
    headline={mockHeadline}
    />

jest.mock('../hooks/useCampsites.js', () => ({
    ...jest.requireActual('../hooks/useCampsites.js'),
    useCampsites: () => ({
        isLoading: mockIsLoading,
        bookmarks: mockBookmarks,
        setBookmarks: jest.fn()
    })
}))

jest.mock('../context/auth.js', () => ({
    ...jest.requireActual('../context/auth.js'),
    useAuth: () => ({
        deleteTokens: mockDeleteTokens,
        setAuthTokens: mocksetAuthTokens
    })
}))

describe('Bookmarks Page', () => {
    it('renders correctly', () => {
        const { container } = renderWithRouter(component)
        expect(container).toMatchSnapshot()
    })

    it('shows a headline, campsites with like-button and the right true-features and a navigation', () => {
        const { getByRole, getAllByText, getAllByTestId, container} = renderWithRouter(component)
        expect(getByRole('heading', {name: /Headline/i})).toBeInTheDocument()
        expect(getByRole('heading', {name: /Test Campsite/i})).toBeInTheDocument()
        expect(getByRole('heading', {name: /An other campsite/i})).toBeInTheDocument()
        expect(getAllByText(/kein W-Lan/i).length).toBe(1)
        expect(getAllByText(/keine Bar/i).length).toBe(1)
        expect(getAllByTestId('like-button').length).toBe(2)
        expect(getByRole('navigation')).toBeInTheDocument()
    })

    it('shows only the loading-spinner, when loading is true', () => {
        mockIsLoading = true
        const { getByTestId, queryByRole } = renderWithRouter(component)
        expect(getByTestId('loading-spinner')).toBeInTheDocument()
        expect(queryByRole('heading', {name: /Test Campsite/i})).not.toBeInTheDocument()
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