import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from 'rsuite';
import encrypt from '../../utils/encryptPasswd';
import styled from 'styled-components';
import api from '../../api';
import Logo from '../../assets/pokemon-pokeball-logo.png';

const CardWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 1em 2em;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 1em 1em 1.5em rgba(0, 0, 0, 1);
    
    header {
        display: flex;
        justify-content: center;
        height: 20%;
    }

    header img {
        width: 50%;
        height: 150%;
    }

    section {
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 72%;

        & label {
            align-self: flex-start;
            margin-left: 1em;
            margin-bottom: 0.4em;
            
            &:nth-child(3) {
                margin-top: 2em;
            }
        } 
    }

    section input {
        width: 92%;
        height: 3em;
        border: solid 1px #aaa;
        outline: none;
        box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);
        border-radius: 0.4em;
        padding: 0 0.4em;

        &:focus {
            border: solid 1px #118ab2;
            box-shadow: 0.2em 0.2em 0.6em #118ab2;
        }
    }

    footer {
        display: flex;
        justify-content: space-around;
    }

    footer a, footer button {
        text-decoration: none;
        padding: 0.7em 1em;
        border-radius: 0.5em;
        box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);
        color: white;

        &:nth-child(1) {
            background-color: #118ab2;
        }

        &:nth-child(2) {
            background-color: #06d6a0;
        }

        &:hover {
            box-shadow: 0.4em 0.4em 0.2em rgba(0, 0, 0, 0.4);
            transition: 0.4s;
        }

    }
`;

const CardLogin = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleSubmit() {
        const formData = {
            login,
            password: encrypt(password),
        }

        api.post('login', formData)
        .then(({data}) => {
            localStorage.setItem('name', data.name);
            localStorage.setItem('image', data.image);
            localStorage.setItem('token', data.token);
            history.push('/home');
        }).catch(() => {
            Alert.error("Login ou Senha incorretos", 5000);
        });
    }

    return (
        <CardWrapper>
            <header id="header">
                <img src={Logo} alt="Logo Pokemon" id="logo"/>
            </header>
            <section id="inputs">
                <label htmlFor="name">Login:</label>
                <input type="text" name="login" id="login" onKeyPress={e => e.key === 'Enter' && handleSubmit()} onChange={e => setLogin(e.target.value)} placeholder="Login"/>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" onKeyPress={e => e.key === 'Enter' && handleSubmit()} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>
            </section>
            <footer id="buttons">
                <button onClick={handleSubmit}>Entrar</button>
                <Link to="/register">Cadastrar</Link>
            </footer>
        </CardWrapper>
    )
}

export default CardLogin;