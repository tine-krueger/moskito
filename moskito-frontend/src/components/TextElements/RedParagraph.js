import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

RedParagraph.propTypes = {
    children: PropTypes.string,
    textAlign: PropTypes.string
}

export default function RedParagraph({ children, textAlign}) {
    return <Eyecatcher data-testid='eyecatcher' textAlign={textAlign}>{children}</Eyecatcher>
}

const Eyecatcher = styled.p`
    color: var(--link);
    text-align: ${props => props.textAlign === 'left' ? 'left' : 'center'};
`