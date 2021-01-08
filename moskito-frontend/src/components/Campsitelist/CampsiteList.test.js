import { render } from '@testing-library/react'
import 'jest-styled-components'
import CampsiteList from './CampsiteList'

const campsite = [
    {
        id: 1,
        pinned: false,
        features: []
    }
]

describe('Campsite-list', () => {

    it('shows error, if one exists', () => {
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

    it('shows text with hints for bookmarks, if campsites-array is empty and it is not the results-page', () => {
        const { queryByText, getByText } = render(
            <CampsiteList
                campsites={[]}
            />
        )
        expect(getByText(/Noch keine Lieblingsplätze gespeichert!/i)).toBeInTheDocument()
        expect(queryByText(/Leider konnten wir zu Deiner Anfrage keine Campingplätze finden/i)).not.toBeInTheDocument()
    })

    it('shows text with hints for search-results page, if campsites-array is empty', () => {
        const { queryByText, getByText } = render(
            <CampsiteList
                campsites={[]}
                isCampsite={true}
            />
        )
        expect(queryByText(/Noch keine Lieblingsplätze gespeichert!/i)).not.toBeInTheDocument()
        expect(getByText(/Leider konnten wir zu Deiner Anfrage keine Campingplätze finden/i)).toBeInTheDocument()
    })
    
    it('shows no text with hints, if campsites-array is not empty', () => {
        const { queryByText } = render(
            <CampsiteList
                campsites={campsite}
            />
        )
        expect(queryByText(/Leider konnten wir zu Deiner Anfrage keine Campingplätze finden/i)).not.toBeInTheDocument()
    })
})