import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pokeball from '../../assets/pokeball.png';
import axios from 'axios';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1em;
    padding: 0.5em;
    width: 20%;
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);

    #image {
        & img {
            width: 10em;
            height: 10em;
        }
    }

    #name {
        text-transform: capitalize;
    }

    #types {
        display: flex;
        justify-content: space-around;
        width: 100%;
        & span {
            background-color: #023047;
            padding: 0.2em 0.8em;
            border-radius: 0.6em;
            color: white;
        }
    }
`;

const CardPokemon = ({url}) => {
    const [imagePokemon, setImagePokemon] = useState();
    const [namePokemon, setNamePokemon] = useState();
    const [typesPokemon, setTypesPokemon] = useState([]);

    useEffect(() => {
        axios.get(url).then(({data}) => {
            const types = [];
            let image = Pokeball;

            if (data.sprites.other.dream_world.front_default) {
                image = data.sprites.other.dream_world.front_default;
            } else if (data.sprites.other["official-artwork"].front_default) {
                image = data.sprites.other["official-artwork"].front_default;
            }

            data.types.forEach(slot => {
                types.push(slot.type.name);
            });

            setImagePokemon(image);
            setNamePokemon(data.name);
            setTypesPokemon(types);
        });
    }, []);

    return (
        <CardWrapper>
            <div id="image">
                <img src={imagePokemon} alt="Imagem do Pokemon" />
            </div>
            <div id="name">
                <h4>{namePokemon}</h4>
            </div>
            <div id="types">
                {typesPokemon.map((type, index) => (
                    <span className={type} key={index}>{type}</span>
                ))}
            </div>
            
        </CardWrapper>
    )
}

export default CardPokemon;