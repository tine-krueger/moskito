import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'

function renderWithRouter(
  ui,
  {
    route = '/testroute',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

export default renderWithRouter

