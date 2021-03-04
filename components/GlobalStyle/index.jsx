import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    @import url("https://use.typekit.net/wuf7ncy.css");

    *{
        box-sizing:border-box;
        margin: 3px;
        
    }
    body{
    
        
        background-color:white;

    }
    html {

    }
    header{
        
        font-family: 'acumin-pro', sans-serif;

        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .meny{

        font-family: 'acumin-pro', sans-serif;
        text-decoration: none;

        display:flex;
        justify-content:center;
        align-items:center;

        margin-top:50px;
        margin-bottom:40px;

    }
    ul {

        
        font-family: 'acumin-pro', sans-serif;
        display:flex;
        justify-content:flex-start;
        align-items:center;

        margin-left:10px;
        
    }



    

    
`
export default GlobalStyle;