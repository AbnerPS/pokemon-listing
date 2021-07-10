import React from 'react';
import styled from 'styled-components';
import pokeball from '../../assets/pokeball.png'
import Pikachu from '../../assets/pokemons/pikachu.png'

const NavbarWrapper = styled.header`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1em;
    border-bottom: solid 0.2em rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 2em;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 5em;
    }
`;

const Header = () => {
    return (
        <NavbarWrapper>
            <Logo>
                <img src={pokeball} alt="Pokeball" />
                <h1>Pokemons Listing</h1>
            </Logo>

            <UserInfo>
                <div id="user-name">Seja bem vindo Abner</div>
                <img src={Pikachu} alt="Imagem de perfil" />
            </UserInfo>
        </NavbarWrapper>
    )
}

export default Header;