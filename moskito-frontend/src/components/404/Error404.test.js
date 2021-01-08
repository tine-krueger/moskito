import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import renderWithRouter from '../../testSetup/setupTests'
import Error404 from './Error404'


describe('Button', () => {
    it('renders correctly', () => {
      const { container } = render(<Error404/>)
      expect(container).toMatchSnapshot()
    })

    it('contains a 404 headline and a push-back button', () => {
        const { getByRole } = render(<Error404/>)
        expect(getByRole('button', {name: /Zurück/i})).toBeInTheDocument()
        expect(getByRole('heading', {name: /Fehler 404/i})).toBeInTheDocument()
    })

    it('goes back in hisory', () => {
        const backwardsRoute = '/find-campsite'
        const backwardsHistory = createMemoryHistory({initialEntries: [backwardsRoute]})
        const { history } = renderWithRouter(<Error404/>,  {history: backwardsHistory})
        userEvent.click(screen.getByText(/Zurück/i))
        expect(history.location.pathname).toBe('/find-campsite')
    })

  })