import { render } from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'

const campsite = {
    pinned: false,
}

const mockOnClick = jest.fn()

const button = <LikeButton
isPinned={campsite.pinned}
onClick={mockOnClick}
/>

const truthyButton = <LikeButton
isPinned={!campsite.pinned}
onClick={mockOnClick}
/>

describe ('Like Button', () =>{
    it('renders correctly', () => {
        const { container } = render(button)
        expect(container).toMatchSnapshot()
    })
    it('pin turns orange, when pinned equals true', () => {
        const { getByTestId } = render(truthyButton)
        expect(getByTestId('pin')).toHaveStyle('fill: var(--link)')
    })

    it('pin turns transparent, when pinned equals false', () => {
        const { getByTestId } = render(button)
        expect(getByTestId('pin')).toHaveStyle('fill: var(--background)')
    })

    it('calls onClick, when Button in clicked', () => {
        const { getByTestId } = render(button)
        userEvent.click(getByTestId('like-button'))
        expect(mockOnClick).toHaveBeenCalledTimes(1)
      })
})