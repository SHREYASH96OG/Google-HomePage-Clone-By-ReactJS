import React from 'react'
import styled from 'styled-components'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';

function Header() {
    return (
        <Container>
            
            <Textbutton>
                <a href='#' title='Gmail'>Gmail</a>
                <a href='#'>Images</a>
                <Apps titleAccess='Google Apps'/>
                <Account titleAccess='Google Account'/>
            </Textbutton>
            <Logo>
                <span>G</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
            </Logo>
            <Search />
        </Container>
    )
}

export default Header

const Container = styled.div`
        display: inline-block;
        height:100vh;
        width:100vw;
        margin:0;
        padding-top:5px;
        right:0;
        top:0;
        justify-content:end;
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        // background-image:url('/images/model-s.jpg');
        background:white;
`        

const Textbutton = styled.div`
        font-size: 13px;
        justify-content: end;
        display:flex;
        flex-direction:row;
        padding-top:4px;
        padding-bottom:3px;
        padding-right:5px;
        padding-left:5px;
        // justify-content:space-between;
        right:0;
        top:0;
        // cursor:pointer;        
        // padding-top:7px;
        // padding-bottom:3px;
        // padding-right:6px;
        // padding-left:6px;
        align-items:center;
        cursor:pointer;
        a{  text-decoration:none;
            padding-right:10px;
            color:black;
        }
`
const Apps = styled(AppsIcon)`
        padding-right:7px;
`
const Account = styled(AccountCircleIcon)`
        padding-right:7px;`

const Logo = styled.div`
        padding:80px 80px 30px 80px;
        font-size: 80px;
        font-family: Product Sans;
        // text-transform: uppercase;
        span:nth-child(10n + 1) {
            color: #4285F4;
          }
          
        span:nth-child(10n + 2) {
            color: #DB4437;
          }
          
        span:nth-child(10n + 3){
            color: #F4B400;
          }
          
        span:nth-child(10n + 5){
            color: #4285F4;
          }
          
        span:nth-child(10n + 4) {
            color: #0F9D58;
          }
          
        span:nth-child(10n + 6){
            color: #DB4437;
          }
`