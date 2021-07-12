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
    width: 100%;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
    box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    &:active {
        box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    }

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
            text-transform: capitalize;
            background-color: #264653;
            padding: 0.2em 0.8em;
            border-radius: 0.6em;
            color: white;
        }

        & .type-grass {
            background-color: #9BCC50;
        }

        & .type-poison {
            background-color: #B97FC9;
        }

        & .type-fire {
            background-color: #dc2f02;
        }

        & .type-water {
            background-color: #4592C4;
        }

        & .type-flying {
            background: linear-gradient(90deg, rgba(61,199,239,1) 0%, rgba(189,185,184,1) 100%);
        }

        & .type-bug {
            background-color: #729F3F;
        }

        & .type-normal {
            background-color: #A4ACAF;
        }

        & .type-electric {
            background-color: #EED535;
        }

        & .type-ground {
            background: linear-gradient(90deg, rgba(247,222,63,1) 0%, rgba(171,152,66,1) 100%);
        }

        & .type-fairy {
            background-color: #FDB9E9;
        }

        & .type-fighting {
            background-color: #D56723;
        }

        & .type-psychic {
            background-color: #F366B9;
        }

        & .type-steel {
            background-color: #9EB7B8;
        }

        & .type-ice {
            background-color: #51C4E7;
        }

        & .type-ghost {
            background-color: #7B62A3;
        }

        & .type-rock {
            background-color: #A48D22;
        }

        & .type-dragon {
            background: linear-gradient(90deg, rgba(83,164,207,1) 0%, rgba(241,110,87,1) 100%);
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
                types.push(slot.type.name.replaceAll("-", " "));
            });

            setImagePokemon(image);
            setNamePokemon(data.name.replaceAll("-", " "));
            setTypesPokemon(types);
        });
    }, [url]);

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
                    <span className={`type-${type}`} key={index}>{type}</span>
                ))}
            </div>
            
        </CardWrapper>
    )
}

export default CardPokemon;