import styled from 'styled-components/macro'
import { AiFillPushpin } from 'react-icons/ai'
import PropTypes from 'prop-types'

LikeButton.propTypes = {
    isPinned: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default function LikeButton({isPinned, onClick}) {
    
    return <CampsiteLikeButton data-testid='like-button' pinned={isPinned} onClick={onClick}><AiFillPushpin data-testid='pin'/></CampsiteLikeButton>

}

const CampsiteLikeButton = styled.div`
    position: absolute;
    right: 1em;
    top: 1em;
    height: 2.5em;
    width: 2.5em;
    border-radius: 10px;
    box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.6), 
                -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    svg {
        width: 1.7em;
        height: 1.7em;
        stroke: #c97f63;
        stroke-width: 3em;
        fill: ${pops => pops.pinned ? '#c97f63' : '#c2d6d3'};
        align-self: center;
        margin-bottom: 3px;
    }
`