import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

FrontHeadline.propTypes = {
    children: PropTypes.string.isRequired
}
export default function FrontHeadline({children}) {
    return (
        <HeadlineStyled>{children}</HeadlineStyled>
    )
}

const HeadlineStyled = styled.h1`
    font-family: 'Hind Madurai';
    font-size: 1.5em;
    text-align: center;
    margin-top: 1em;

`