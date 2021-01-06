import { render } from '@testing-library/react'
import 'jest-styled-components'
import LikeButton from './LikeButton'

const campsite = {
    pinned: false,
}

const button = <LikeButton
isPinned={campsite.pinned}
onClick={jest.fn()}
/>

const truthyButton = <LikeButton
isPinned={!campsite.pinned}
onClick={jest.fn()}
/>

describe ('Like Button', () =>{
    it('renders correctly', () => {
        const { container } = render(button)
        expect(container).toMatchSnapshot()
    })
    it('pin turns orange, when pinned equals true', () => {
        const { getByTestId } = render(truthyButton)
        expect(getByTestId('pin')).toHaveStyle('fill: #c97f63')
    })

    it('pin turns transparent, when pinned equals false', () => {
        const { getByTestId } = render(button)
        expect(getByTestId('pin')).toHaveStyle('fill: #c2d6d3')
    })
})