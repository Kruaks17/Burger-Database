import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *{
        @import url("https://use.typekit.net/wuf7ncy.css");
        box-sizing:border-box;
    }
    body{
        background-color: #E84823;
    }
    header{
        font-family: 'acumin-pro', sans-serif;
        color: white;
       
        display:flex;
        justify-content:space-around;
        align-items:center;

        padding: 10px;

    }
    .meny{
        font-family: 'acumin-pro', sans-serif;
        text-decoration: none;

        display:flex;
        justify-content:space-evenly;
        align-items:center;

        margin-top:50px;
        margin-bottom:40px;

        padding: 40px;

        margin: 0 auto;
        max-width: 50vw;
    }
    ul {
        font-family: 'acumin-pro', sans-serif;
        font-size: 2rem;
    
        background-color:white;
        margin-left:10px;

        display: grid;
        grid-template-rows: repeat(3, 1fr);
        justify-content:center;
        align-content:center;
        
    }
    form {

        display: grid;
        grid-template-rows: repeat(3, 1fr);
        justify-content:center;
        align-content:center;

        background-color: white;
    
        border: black solid 5px;
        
        margin: 0 auto;
        max-width: 30vw;

        padding: 50px;

        box-shadow: 10px 10px black;
    }
    @media(max-width:600px){
        form{

            max-width:100vw;
            box-shadow: none;
        }
    }
    button{
        border: black solid 5px;
        
        padding: 10px;
        width: 300px;
        background-color: white;
        
        color: black;
        font-size: 1rem;
        font-family:'acumin-pro', sans-serif;
    }
    input {
        background-color: white;
        border: black solid 5px;

        color: #E84823;
        font-size: 1rem;
        font-family:'acumin-pro', sans-serif;

        padding: 10px;
    }
    input::placeholder{
        color:black;
    }
    .link-login{

        font-family:'acumin-pro', sans-serif;
        background-color:white;
        text-decoration:underline;
        color:black;
    }
    .link-login:hover{

        color: #E84823;

    }
    .Login-Overskrift{
        display:flex;
        justify-content:center;
        align-items:center;

        font-family:'acumin-pro', sans-serif;
        color: black;
        background-color:white;

        padding: 10px;

        border: black solid 5px;
        margin: 0 auto;
        max-width: 30vw;
        
        margin-bottom:50px;
        margin-top:50px;

        box-shadow: 10px 10px black;
    }
    @media (max-width:600px){
        .Login-Overskrift{
            max-width:100vw;
            box-shadow: none;
        }
        .handlekurv{
            max-width:100vw;
            box-shadow: none;
        }
    }
    .ProduktNavn{
        font-size:2rem;
        background-color:white;
    }
    .loggut_btn {
        width:90px;
    }
    button, a{
        cursor: pointer;
    }
    h2{
        font-family:'acumin-pro', sans-serif;
        background-color:transparent;
    }
    .meny a {
        background-color: white;
        
        color: black;
        font-size: 1.5rem;
        font-weight: bold;
        font-family:'acumin-pro', sans-serif;

        text-decoration: none;
        border: solid black 5px;

        padding: 10px;
    }
    .bestillBtn{
        
        font-family:'acumin-pro', sans-serif;
        font-size:1.5rem;
    }
    .cart-container {

        display: grid;
        grid-template-rows: repeat(3, 1fr);
        justify-content:center;
        align-content:center;

        background-color: white;
    
        border: black solid 5px;
        
        margin: 0 auto;
        max-width: 40vw;

        padding: 50px;

        box-shadow: 10px 10px black;
    }
    @media (max-width:600px){
        .cart-container{
            max-width:100vw;
            box-shadow: none;
        }
    }
    .handlekurv{
        display:flex;
        justify-content:center;
        align-items:center;

        font-family:'acumin-pro', sans-serif;
        color: black;
        background-color:white;

        padding: 10px;

        border: black solid 5px;
        margin: 0 auto;
        max-width: 40vw;
        
        margin-bottom:50px;
        margin-top:50px;

        box-shadow: 10px 10px black;
    }
    @media (max-width:600px){
        .handlekurv{
            max-width:100vw;
            box-shadow: none;
        }
    }
    .tilbake {
        display:flex;
        justify-content:center;
        align-items:center;

        font-family:'acumin-pro', sans-serif;
        font-weight:bold;
        text-decoration:none;
        
        color: black;
        background-color:white;

        padding: 10px;

        border: black solid 5px;
        margin: 0 auto;
        max-width: 40vw;
        
        box-shadow: 10px 10px black;
    }
    .productName {
        font-family:'acumin-pro', sans-serif;
        color: black;
        background-color:white;
    }
    .menu-container {
        display:flex;
        justify-content:center;
        align-items:center;

        font-family:'acumin-pro', sans-serif;
        color: black;
        background-color:white;

        padding: 10px;

        border: black solid 5px;
        margin: 0 auto;
        max-width: 40vw;
        
        margin-bottom:50px;
        margin-top:50px;

        box-shadow: 10px 10px black;
    }
    @media (max-width:600px){
        .menu-container{
            max-width:100vw;
            box-shadow: none;
        }
    }
`;
export default GlobalStyle;