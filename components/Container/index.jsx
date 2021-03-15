import styled from 'styled-components';

const Container = styled.div`

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
    .menu-container, .orderContainer {
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


export default Container;