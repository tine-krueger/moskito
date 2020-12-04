import styled from 'styled-components/macro'
import { AiFillPushpin } from 'react-icons/ai'


export default function LikeButton() {
    

    return <CampsiteLikeButton onClick={handleClick}><AiFillPushpin/></CampsiteLikeButton>

    function handleClick() {

    }
}

const CampsiteLikeButton = styled.div`
    position: absolute;
    right: 1em;
    top: 1em;
    height: 3.5em;
    width: 3.5em;
    border-radius: 10px;
    box-shadow: 2px 4px 8px -4px rgba(0, 0, 0, 0.6), 
                -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    svg {
        width: 2.1em;
        height: 2.1em;
        stroke: #c97f63;
        stroke-width: 3em;
        fill: ${pinned => (pinned === true ? '#c97f63' : '#c2d6d3')};
        align-self: center;
        margin-bottom: 3px;
    }
`