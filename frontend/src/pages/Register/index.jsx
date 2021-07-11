import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Bullbasaur from '../../assets/pokemons/bullbasaur.png'
import Charmander from '../../assets/pokemons/charmander.png'
import Eevee from '../../assets/pokemons/eevee.png'
import Meowth from '../../assets/pokemons/meowth.png'
import Pikachu from '../../assets/pokemons/pikachu.png'
import Psyduck from '../../assets/pokemons/psyduck.png'
import Snorlax from '../../assets/pokemons/snorlax.png'
import Squirtle from '../../assets/pokemons/squirtle.png'
import api from '../../api';
import Logo from '../../assets/pokemon-logo.png';


const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.section`
    box-shadow: 0.2em 0.2em 0.8em rgba(0, 0, 0, 0.4);
    width: 40%;
    height: 90%;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
`;

const Header = styled.header`
    img {
        width: 20em;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .group-input {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 1em;
    }

    .group-input div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .group-input div label {
        margin-bottom: 0.4em;
    }

    .group-input div input {
        width: 92%;
        height: 2.5em;
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
`;

const AvatarList = styled.ul`
    width: 100%;
    height: 15em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #aaa;
        list-style: none;
        border-radius: 1em;
        padding: 0.8em;
        cursor: pointer;
        width: 22%;
        box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);
        -webkit-user-select: none;  
        -moz-user-select: none;    
        -ms-user-select: none;      
        user-select: none;
    }

    li:active {
        box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    }

    li img {
        width: 3em;
    }
`;

const Footer = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-around;

    a {
        text-decoration: none;
        padding: 0.7em 1em;
        border-radius: 0.5em;
        box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);
        color: white;

        &:hover {
            box-shadow: 0.4em 0.4em 0.2em rgba(0, 0, 0, 0.4);
            transition: 0.4s;
        }

        &:nth-child(1) {
            background-color: #118ab2;
        }

        &:nth-child(2) {
            background-color: #ef476f;
        }
    }

    

`;

const Register = () => {

    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPwd, setVerifyPwd] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();

    function handleSubmit() {
        if (password && password !== verifyPwd) {
            return '';
        }

        const data = {
            name,
            login,
            password,
            image
        }

        api.post('register', data)
        .then(() => {
            history.push('/');
        }).catch((error) => {
            alert(error);
        });
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <img src={Logo} alt="Logo Pokemon" id="logo"/>
                </Header>
                
                <Form>
                    <div className="group-input">
                        <div>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required/>
                        </div>

                        <div>
                            <label htmlFor="login">Login:</label>
                            <input type="text" id="login" value={login} onChange={e => setLogin(e.target.value)} placeholder="Login" required/>
                        </div>
                    </div>

                    <div className="group-input">
                        <div>
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required/>
                        </div>

                        <div>
                            <label htmlFor="verifyPwd">Confirmar:</label>
                            <input type="password" id="verifyPwd" value={verifyPwd} placeholder="Confirmar Senha" onChange={e => setVerifyPwd(e.target.value)}/>
                        </div>
                    </div>

                    <h4>Selecione um Pokémon como avatar de perfil.</h4>

                    <AvatarList>
                        <li>
                            <img src={Pikachu} alt="Avatar do Pikachu" onClick={() => setImage(Pikachu)}/>
                            <label>Pikachu</label>
                        </li>
                        <li>
                            <img src={Bullbasaur} alt="Avatar do Bullbasaur" onClick={() => setImage(Bullbasaur)}/>
                            <label>Bullbasaur</label>
                        </li>
                        <li>
                            <img src={Charmander} alt="Avatar do Charmander" onClick={() => setImage(Charmander)}/>
                            <label>Charmander</label>
                        </li>
                        <li>
                            <img src={Squirtle} alt="Avatar do Squirtle" onClick={() => setImage(Squirtle)}/>
                            <label>Squirtle</label>
                        </li>
                        <li>
                            <img src={Eevee} alt="Avatar do Eevee" onClick={() => setImage(Eevee)}/>
                            <label>Eevee</label>
                        </li>
                        <li>
                            <img src={Meowth} alt="Avatar do Meowth" onClick={() => setImage(Meowth)}/>
                            <label>Meowth</label>
                        </li>
                        <li>
                            <img src={Psyduck} alt="Avatar do Psyduck" onClick={() => setImage(Psyduck)}/>
                            <label>Psyduck</label>
                        </li>
                        <li>
                            <img src={Snorlax} alt="Avatar do Snorlax" onClick={() => setImage(Snorlax)}/>
                            <label>Snorlax</label>
                        </li>
                    </AvatarList>
                </Form>
                
                <Footer id="buttons">
                    <Link onClick={handleSubmit}>Cadastrar</Link>
                    <Link to="/">Voltar</Link>
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default Register;