import React from 'react';
import styled from 'styled-components';
import pokeball from '../../assets/pokeball.png';
import Pikachu from '../../assets/pokemons/pikachu.png';
import ImgLogo from '../../assets/pokemon-logo.png';

const NavbarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5%;
    padding: 1em;
    border-bottom: solid 0.2em rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;

    #logo-pokeball {
        width: 3em;
    }

    #logo-pokemon {
        width: 10em;
    }
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;

    & li {
        list-style: none;
        cursor: pointer;
        background-color: #118ab2;
        padding: 0.5em;
        border-radius: 0.4em;
        color: white;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;

    #image-frame {
        box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);
        border-radius: 100%;
        padding: 0.6em;
        width: 15%;
        background-color: #118ab2;

        & img {
            width: 100%;
        }
    }
`;

const Header = () => {
    return (
        <NavbarWrapper>
            <Logo>
                <img src={pokeball} alt="Pokeball" id="logo-pokeball"/>
                <img src={ImgLogo} alt="Logo tipo Pokemon" id="logo-pokemon"/>
            </Logo>

            <Menu>
                <li>Tipo Grama</li>
                <li>Tipo Fogo</li>
                <li>Tipo Agua</li>
                <li>Tipo Fantasma</li>
            </Menu>

            <UserInfo>
                <div id="user-name">Seja bem vindo Abner</div>
                <div id="image-frame">
                    <img src={Pikachu} alt="Imagem de perfil" />
                </div>
            </UserInfo>
        </NavbarWrapper>
    )
}

export default Header;