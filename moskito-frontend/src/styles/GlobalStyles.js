import { createGlobalStyle } from 'styled-components/macro'
import arvoBold from './fonts/arvoBold.woff'
import arvoBold2 from './fonts/arvoBold2.woff2'
import hindMaduraiRegular from './fonts/hindMaduraiRegular.woff'
import hindMaduraiRegular2 from './fonts/hindMaduraiRegular2.woff2'



export default createGlobalStyle`


    @font-face {
        font-family: 'Arvo';
        src: local(''),
        url(${arvoBold2}) format('woff2'),
        url(${arvoBold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Hind Madurai';
        src: local(''),
        url(${hindMaduraiRegular2}) format('woff2'),
        url(${hindMaduraiRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    } 

    :root {
        --background: #c2d6d3;
        --background-light: #d8e6e4;
        --paragraph: #6b717e;
        --link: #c97f63;
        --link-hover: #d3a392;
    }

    * {
        box-sizing: border-box;
    }   

    body {
        margin: 0 auto;
        padding: 0;
        font-family: 'Hind Madurai';
        font-size: 16px;
        color: var(--paragraph);
        background-color: var(--background-light);
        max-width: 500px;
        
    }

    #root {
        background-color: var(--background);
        min-height: 100vh;
        padding: 2em 0;
        box-shadow: 2px 4px 8px -4px rgba(0,0,0,0.6), -2px -2px 2px 0px rgba(255,255,255,0.5);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Arvo';
        color: #476c85;
    }

    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.3rem;
    }

    h3 {
        font-size: 1.1rem;
    }

    h4 {
        font-size: 1.0rem;
    }

    a {
        color: var(--link);
        text-decoration: none;
    }

    a:hover {
        color: var(--link-hover);
    }

    textarea,
    input:matches(
        [type="email"],
        [type="number"],
        [type="password"],
        [type="search"],
        [type="tel"],
        [type="text"],
        [type="url"]
    )   {
            -webkit-appearance: none;
        }
`



