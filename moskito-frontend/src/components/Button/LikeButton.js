import styled from 'styled-components/macro'
import { AiFillPushpin } from 'react-icons/ai'
import { bookmark } from '../../services/handleBookmarkApi'
import { useState } from 'react'


export default function LikeButton({id}) {
    const [ pinned, setPinned] = useState(false)
    

    return <CampsiteLikeButton pinned={pinned} onClick={handleClick}><AiFillPushpin/></CampsiteLikeButton>

    function handleClick() {
        setPinned(!pinned)
        bookmark(id)
        
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
        fill: ${pops => pops.pinned ? '#c97f63' : '#c2d6d3'};
        align-self: center;
        margin-bottom: 3px;
    }
`