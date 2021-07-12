import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import pokeball from '../../assets/pokeball.png';
import { Dropdown } from 'rsuite'
import { FaSignOutAlt } from 'react-icons/fa'
import ImgLogo from '../../assets/pokemon-logo-sf.png';

const NavbarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    padding: 1em;
    background-color: #3a86ff;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    img {
        width: 30%;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;

    .img-user {
        width: 100%;
    }

    .div-dropdown {
        width: 12%;
        border: solid 2px white;
        border-radius: 0.5em;

        &:hover {
            background-color: white;
        }

        &:hover span{
            color: #3a86ff;
        }

        & span {
            color: white;
        }
    }
`;

const Header = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const history = useHistory();

    useEffect(() => {
        setImage(localStorage.getItem("image"));
        setName(localStorage.getItem("name"));
    }, [])

    function logOut() {
        history.push("/");
    }
    
    return (
        <NavbarWrapper>
            <Logo>
                <img src={ImgLogo} alt="Logo tipo Pokemon" id="logo-pokemon"/>
            </Logo>

            <UserInfo>
                <div id="user-name">
                    <h5>Seja bem-vindo de volta, <strong>{name}</strong></h5>
                </div>
                <div className="div-dropdown">
                    <Dropdown icon={<img src={image ? image : pokeball} alt="Imagem Usuario" className="img-user"/>} >
                        <Dropdown.Item onSelect={logOut}><FaSignOutAlt/> Sair</Dropdown.Item>
                    </Dropdown>
                </div>
            </UserInfo>
        </NavbarWrapper>
    )
}

export default Header;