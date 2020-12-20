import { render } from '@testing-library/react'
import 'jest-styled-components'
import FeatureListItem from './FeatureListItem'

describe('Feature List Item', () => {
    it('renders correctly', () => {
        const { container } = render(
            <FeatureListItem
                feature={{
                    type: 'wlan'
                }}
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('shows the correct feature name', () => {
        const { getByText } = render(
            <FeatureListItem
                feature={{
                    type: 'wlan'
                }}
            />
        )
        expect(getByText('kein W-Lan')).toBeInTheDocument()
    })
})
