import styled from 'styled-components';

const Form = styled.div` 

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

        margin-top: 10px;
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

`;

export default Form;