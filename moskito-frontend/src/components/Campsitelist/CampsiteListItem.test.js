import { render } from '@testing-library/react'
import 'jest-styled-components'
import CampsiteListItem from './CampsiteListItem'

describe('Campsite-list item', () => {
    it('renders correctly', () => {
        const { container } = render(
            <CampsiteListItem
                campsite={{
                    name: "Nice Campsite",
                    street: "Campsitestreet 1",
                    postalCode: "12345",
                    place: "Campsite Place",
                    telephone: "",
                    email: "mail@campsiteplace.de",
                    web:"",
                    features: [
                        {
                            type: "wlan",
                            id: 1
                        }
                    ]
                }}
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('shown the correct campsite information', () => {
        const { getByText, queryByTestId } = render(
            <CampsiteListItem
                campsite={{
                    name: "Nice Campsite",
                    street: "Campsitestreet 1",
                    postalCode: "12345",
                    place: "Campsite Place",
                    telephone: "",
                    email: "mail@campsiteplace.de",
                    web:"",
                    features: [
                        {
                            type: "wlan",
                            id: 1
                        }
                    ]

                }}
            />
        )

        expect(getByText('Nice Campsite')).toBeInTheDocument()
        expect(getByText('Campsitestreet 1, 12345 Campsite Place')).toBeInTheDocument()
        expect(getByText('mail@campsiteplace.de')).toBeInTheDocument()
        expect(queryByTestId('mail')).toBeInTheDocument()
        expect(queryByTestId('phone')).not.toBeInTheDocument()
    })
})
