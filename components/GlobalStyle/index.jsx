import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    @import url("https://use.typekit.net/wuf7ncy.css");

    *{
        box-sizing:border-box;
        margin: 3px;
        background-color: #E84823;
        
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
        font-size: 2rem;
        

        background-color:#E84823;
        margin-left:10px;
        
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

        box-shadow: 10px 20px  black;

    }
    @media(max-width:600px){

        form{

            max-width:100vw;
            box-shadow: none;
        }
    }
    button{

        border-bottom: black solid 5px;
        border-left: black solid 5px;
        border-top:#E84823 solid 5px;
        border-right: #E84823 solid 5px;

        padding: 5px;
        width: 300px;
        background-color: white;
        
        color: black;
        font-size: 1rem;
        font-family:'acumin-pro', sans-serif;

    }
    input {

        background-color: white;
        border-bottom: black solid 5px;
        border-left: black solid 5px;
        border-top:#E84823 solid 5px;
        border-right: #E84823 solid 5px;

        color: #E84823;
        font-size: 1rem;
        font-family:'acumin-pro', sans-serif;

    }
    input::placeholder{

        color:black;
    }
    h2{
        
        font-family:'acumin-pro', sans-serif;
        background-color:white;
    }
    .link-login{

        font-family:'acumin-pro', sans-serif;
        background-color:white;
        text-decoration:none;
        color:black;

    }
    .Login-Overskrift{

        display:flex;
        justify-content:center;
        align-items:center;

        font-family:'acumin-pro', sans-serif;
        color: white;
        
        margin-bottom:50px;
        margin-top:50px;
    }
    .ProduktNavn{
        background-color:#E84823;
    }



    

    
`;
export default GlobalStyle;