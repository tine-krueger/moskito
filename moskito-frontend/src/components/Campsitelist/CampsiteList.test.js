import { render } from '@testing-library/react'
import 'jest-styled-components'
import CampsiteList from './CampsiteList'

const campsite = [
    {
        id: 1,
        features: []
    }
]
describe('Campsite-list', () => {

    it('shows error, is one exists', () => {
        const { getByText } = render(
            <CampsiteList
                campsites={campsite}
                errors={{
                    errors: "An Error ist shown!"
                }}
            />
        )
        expect(getByText('An Error ist shown!')).toBeInTheDocument()
    })

    it('shows no error, is error doas not exists', () => {
        const { queryByTestId } = render(
            <CampsiteList
                campsites={campsite}
            
            />
        )
        expect(queryByTestId('error')).not.toBeInTheDocument()
    })
})