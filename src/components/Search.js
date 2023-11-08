import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Camera } from 'heroicons-react';


function Search() {
    return (
        <Searchsec>
        <SearchSection>
            <Searchlogo/>
            <input type='text' placeholder='Search Google or type URL'></input>
            <MicLogo/>
            <CameraLogo/>            
        </SearchSection>
        </Searchsec>
    )
}

export default Search

const Searchsec = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
`

const SearchSection = styled.div`
        height:30px;
        width:25vw;
        display:flex;
        align-items:center;
        justify-content:center;
        border:1px solid lightgray;
        padding:0px 5px 0px 5px;
        input{
            border:0;
            outline:0;
            padding:0px 5px 0px 5px;
        }
        border-radius:999px;
        
`
const Searchlogo = styled(SearchIcon)`
        cursor:pointer;
        padding:0px 5px 0px 5px;
`
const MicLogo = styled(KeyboardVoiceIcon)`
        cursor:pointer;
        padding:0px 5px 0px 5px;
`
const CameraLogo = styled(Camera)`
        cursor:pointer;
        padding:0px 5px 0px 5px;
`