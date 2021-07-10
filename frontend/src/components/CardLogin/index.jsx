import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/pokemon-logo.png';

const CardWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30em;
    height: 20em;
    padding: 1em 2em;
    background-color: white;
    border-radius: 0.2em;
    box-shadow: 5px 5px 10px #000;

    header {
        display: flex;
        justify-content: center;
    }

    header img {
        width: 20em;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 5em;
    }

    section input {
        border-radius: 1em;
        height: 2em;
        padding: 1.2em;
    }

    footer {
        display: flex;
        justify-content: space-around;
    }

    footer a {
        border-radius: 0.2em;
        padding: 0.5em;
        background-color: #4361ee;
        text-decoration: none;
        color: white;

    }
`;

const Header = () => {
    return (
        <CardWrapper>
            <header id="header">
                <img src={Logo} alt="Logo Pokemon" id="logo"/>
            </header>
            <section id="inputs">
                <input type="text" name="login" id="login" placeholder="Login"/>
                <input type="password" name="password" id="password" placeholder="Senha"/>
            </section>
            <footer id="buttons">
                <Link to="/home">Entrar</Link>
                <Link to="/register">Cadastrar</Link>
            </footer>
        </CardWrapper>
    )
}

export default Header;