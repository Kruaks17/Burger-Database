import styled from 'styled-components';

export const Title = styled.h1`

font-size: 2rem;
font-family: 'acumin-pro', sans-serif;

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

    }





`;

export const underTitle  = styled.h2`

font-size: 1rem;
font-family: 'acumin-pro', sans-serif;

`;

export default Title;