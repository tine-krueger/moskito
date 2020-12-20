import { render } from '@testing-library/react'
import 'jest-styled-components'
import FeatureListItem from './FeatureListItem'

const feature = {
    type: 'wlan'
}
describe('Feature List Item', () => {
    it('renders correctly', () => {
        const { container } = render(
            <FeatureListItem
                feature={feature}
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct feature name', () => {
        const { getByText } = render(
            <FeatureListItem
                feature={feature}
            />
        )
        expect(getByText('kein W-Lan')).toBeInTheDocument()
    })
})
