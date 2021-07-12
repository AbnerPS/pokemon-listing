import React, { useEffect } from 'react';
import CardLogin from '../../components/CardLogin';
import Pokeball from '../../assets/pokeball.png'
import styled from 'styled-components'

const Wrapper = styled.main`
    display: flex;
    align-items: center;
    height: 100vh;
    background-image: url(${Pokeball});
    background-repeat: no-repeat;
    background-position-x: 40em;
    background-position-y: -20em;
    background-size: 100em;

    div {
        margin-left: 3em;
        width: 30%;
        height: 80%;
    }
`;

const Login = () => {

    useEffect(() => {
        localStorage.clear();
    });
    
    return (
        <Wrapper>
            <div>
                <CardLogin />
            </div>
        </Wrapper>
    )
}

export default Login;