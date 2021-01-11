import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import FindCampsitesPage from './FindCampsitesPage'
import renderWithRouter from '../testSetup/setupTests'
import campsiteBasisData from '../data/campsiteBasisData.json'

const mockGetCampsites = jest.fn()
const mockHeadline = 'Headline'
const mockSetLoading = jest.fn()
const mockDeleteTokens = jest.fn()
const mocksetAuthTokens = jest.fn()

jest.mock('../context/auth.js', () => ({
    ...jest.requireActual('../context/auth.js'),
    useAuth: () => ({
        deleteTokens: mockDeleteTokens,
        setAuthTokens: mocksetAuthTokens
    })
}))

const component = <FindCampsitesPage
getCampsites={mockGetCampsites}
headline={mockHeadline}
setLoading={mockSetLoading} 
/>
describe('Find Campsites Page', () => {
    it('renders correctly', () => {
        const { container } = renderWithRouter(component)
        expect(container).toMatchSnapshot()
    })

    it('calls getCampsites when clicking the Button with the right parameter and redirects to results page', () => {
        const { getByText, history } = renderWithRouter(component)
        userEvent.click(getByText('Campingplätze finden'))
        expect(mockGetCampsites).toHaveBeenCalledTimes(1)
        expect(mockGetCampsites).toHaveBeenCalledWith(campsiteBasisData)
        expect(history.location.pathname).toBe('/campsites')
    })

    it('navigates to bookmarks-page, when clicking on nav-button', () => {
        const { getByTestId, history } = renderWithRouter(component)
        userEvent.click(getByTestId('bookmarks'))
        expect(history.location.pathname).toBe('/bookmarks')
    })

    it('logs out by deleting tokens, when clicking on nav-button', () => {
        const { getByTestId } = renderWithRouter(component)
        userEvent.click(getByTestId('logout'))
        expect(mocksetAuthTokens).toHaveBeenCalledTimes(1)
        expect(mockDeleteTokens).toHaveBeenCalledTimes(1)
    })
})