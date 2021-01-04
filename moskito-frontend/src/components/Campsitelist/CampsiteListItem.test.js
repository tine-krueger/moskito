import { render } from '@testing-library/react'
import 'jest-styled-components'
import CampsiteListItem from './CampsiteListItem'

const campsite = {
    id: 1,
    name: "Nice Campsite",
    street: "Campsitestreet 1",
    postalCode: "12345",
    place: "Campsite Place",
    telephone: "",
    email: "mail@campsiteplace.de",
    web:"",
    pinned: false,
    features: [
        {
            type: "wlan",
            id: 1
        }
    ]
}
describe('Campsite-list item', () => {
    it('renders correctly', () => {
        const { container } = render(
            <CampsiteListItem
                campsite={campsite}
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('shown the correct campsite information', () => {
        const { getByText, queryByTestId } = render(
            <CampsiteListItem
                campsite={campsite}
            />
        )
        expect(getByText(campsite.name)).toBeInTheDocument()
        expect(getByText(`${campsite.street}, ${campsite.postalCode} ${campsite.place}` )).toBeInTheDocument()
        expect(getByText(campsite.email)).toBeInTheDocument()
        expect(queryByTestId('mail')).toBeInTheDocument()
        expect(queryByTestId('phone')).not.toBeInTheDocument()
    })
})
