import React from 'react';
import { FaCodepen, FaLinkedin, FaGithub, FaNetworkWired } from 'react-icons/fa'
import styled from 'styled-components';

const WrapperFooter = styled.footer`
    display: flex;
    justify-content: space-around;
    background-color: rgba(37, 36, 34, 0.8);
    margin-top: 20px;
    font-family: 'Cairo', sans-serif;
    padding: 10px 0px;
    color: white;

    span {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .fonte-api a{
        display: flex;
        text-decoration: none;
        margin-top: 5px;
        border: solid 2px transparent;
        border-radius: 10px;
        padding: 5px;
        color: #FFF;
    }

    .fonte-api a svg {
        margin-right: 5px;
        font-size: 20px;
    }

    .fonte-api a:hover {
        color: #4cc9f0;
        border-color: #4cc9f0;
        transition: 0.5s;
    }

    .criador {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .criador span {
        margin-bottom: 0px;
    }

    .criador img {
        width: 80px;
        border-radius: 50%;
    }

    .redes-sociais {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .redes-sociais a {
        text-decoration: none;
        color: #FFF;
        border: solid 2px rgba(0, 0, 0, 0.0);
        border-radius: 10px;
        padding: 8px;
        margin-right: 20px;
    }

    .redes-sociais a:hover {
        color: #4cc9f0;
        border-color:#4cc9f0;
        transition: 0.8s;
    }

    .redes-sociais a svg {
        font-size: 20px;
        margin-bottom: -5px;
    }
`;

const Footer = () => {
    return (
        <WrapperFooter>
            <div className="fonte-api">
                <a href="https://pokeapi.co/docs/v2" target="_blank" rel="noopener noreferrer">
                    <FaNetworkWired />
                    <p>Pokémon API </p>
                </a>
            </div>

            <div className="criador">
                <span>Developed by Abner Pereira Silva</span>
                <span><strong>Full Stack Developer</strong></span>
            </div>

            <div className="redes-sociais">
                <a href="https://codepen.io/Abner_Silva" target="_blank"
                    rel="noopener noreferrer">
                    <FaCodepen />
                </a>
                <a href="https://www.linkedin.com/in/abner-pereira-silva/" target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/AbnerPS" target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </WrapperFooter>
    )
}

export default Footer;