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

    * {
        box-sizing: border-box;
    }   

    body {
        margin: 0 auto;
        padding: 0;
        font-family: 'Hind Madurai';
        font-size: 16px;
        color: #6b717e;
        background-color: #c2d6d3;
        max-width: 500px;
        
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
        color: #c97f63;
        text-decoration: none;
    }

    a:hover {
        color: #d3a392;
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



