import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';
import Footer from '../../components/Footer';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';
import Pokeball from '../../assets/pokeball.png';
import { Modal, Alert } from 'rsuite';
import api from '../../api';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const WrapperModal = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2em;
    width: 100%;
    height: 32em;

    .image-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-transform: capitalize;

        & img {
            width: 20em;
            height: 25em;
        }
    }

    .details {
        overflow-y: auto;
        padding: 0 2em;
        border-left: solid 1px #aaa;
        margin-left: 2em;

        & span {
            background-color: #264653;
            color: white;
            padding: 0.2em 1em;
            border-radius: 0.4em;
        }

        & .types, .abilities, .moves {
            display: flex;
            flex-wrap: wrap;

            & span {
                text-transform: capitalize;
                background-color: #264653;
                margin-right: 0.4em;
                margin-bottom: 0.4em;
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
    }

`;

const SearchContainer = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1em;

    div {
        border-radius: 0.5em;
        padding: 0.1em 0.8em;
        border: solid 2px #aaa;

        & input {
            border: none;
            width: 20em;
            height: 2em;
            outline: none;
            border-right: solid 2px #aaa;
        }

        & svg {
            margin-left: 1em;
            margin-right: 0.2em;
            cursor: pointer;
            
            &:hover {
                color: #3a86ff;
            }
        }
    }
`;

const CardContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 2em;
    margin-top: 1em;
    
    > div {
        width: 18%;
        margin-bottom: 1.5em;
    }
`;

const Pagination = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    & button {
        font-size: 1em;
        padding: 0.5em 1em;
        border: solid 1px #3a86ff;
        color: #3a86ff;
        background-color: transparent;
        cursor: pointer;
        border-radius: 0.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            color: white;
            background-color: #3a86ff;
            transition: 0.6s;
        }
    }

    & .btn-previous svg {
        margin-right: 1em;
    }

    & .btn-next svg {
        margin-left: 1em;
    }

`;

const Home = () => {
    const [cards, setCards] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState({});
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
    const history = useHistory();

    useEffect(() => {
        api.get(`list`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(({data}) => {
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setCards(data.results);
        }).catch(() => {
            Alert.error("Você não tem acesso a este serviço", 5000);
            history.push("/");
        });
    }, [history])

    function handleNextPage() {
        axios.get(nextPage).then(({data}) => {
            setCurrentPage(nextPage);
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setCards(data.results);
        });
    }

    function handlePreviousPage() {
        axios.get(previousPage).then(({data}) => {
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setCards(data.results);
        })
    }

    function showDetails(url) {
        axios.get(url).then(({data}) => {
            const types = [];
            const abilities = [];
            const moves = [];
            const name = data.name.replaceAll("-", " ");
            const weight = data.weight;
            const height = data.height;
            let image = Pokeball;
            if (data.sprites.other.dream_world.front_default) {
                image = data.sprites.other.dream_world.front_default;
            } else if (data.sprites.other["official-artwork"].front_default) {
                image = data.sprites.other["official-artwork"].front_default;
            }

            data.types.forEach(slot => {
                types.push(slot.type.name.replaceAll("-", " "));
            });

            data.abilities.forEach(slot => {
                abilities.push(slot.ability.name.replaceAll("-", " "));
            });

            data.moves.forEach(slot => {
                moves.push(slot.move.name.replaceAll("-", " "));
            });

            const moreInfo = {
                types,
                image: image ? image : Pokeball,
                name,
                weight,
                height,
                abilities,
                moves
            }

            setDetails(moreInfo);
            setShowModal(true);
        });
    }

    function hideDetails() {
        setShowModal(false);
    }

    function searchPokemon() {
        if (search) {
            api.get(`search?name=${search}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }).then(({data}) => {
                setCards(data);
            }).catch(() => {
                Alert.error("Você não tem acesso a este serviço", 5000);
                history.push("/");
            });
        } else {
            axios.get(currentPage).then(({data}) => {
                setNextPage(data.next);
                setPreviousPage(data.previous);
                setCards(data.results);
            });
        }
    }

    return (
        <Wrapper>
            <Header />

            <SearchContainer>
                <div>
                    <input type="text" placeholder="Pesquisar pokemon por nome" onKeyPress={e => e.key === 'Enter' && searchPokemon()} onChange={e => {setSearch(e.target.value)}}/>
                    <FaSearch onClick={searchPokemon}/>
                </div>
            </SearchContainer>
            
            <CardContainer >
                {cards.map(pokemon => (
                    <div onClick={() => showDetails(pokemon.url)} key={pokemon.name}>
                        <CardPokemon url={pokemon.url}/>
                    </div>
                ))}
            </CardContainer>
            
            <Pagination>
                {previousPage && <button onClick={handlePreviousPage} className="btn-previous"><FaArrowLeft /> Página Anterior</button>}
                {nextPage && <button onClick={handleNextPage} className="btn-next">Próxima Página <FaArrowRight /></button>}
            </Pagination>
            
            <Footer />

            <Modal size="lg" show={showModal} onHide={hideDetails}>
                <Modal.Header>
                    <Modal.Title>
                        <span>Detalhes do Pokémon</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <WrapperModal>
                        <div className="image-name">
                            <img src={details.image} alt="Imagem grande do pokemon"></img>
                            <h2>{details.name}</h2>
                        </div>

                        <div className="details">
                            <div>
                                <h4>Tipos:</h4>
                                <div className="types">
                                    {details.types && details.types.map((element) => (
                                        <span className={`type-${element}`}  key={element}>{element}</span>
                                    ))}
                                </div>
                            </div>

                            <hr/>

                            <div className="weight">
                                <h4>Peso:</h4>
                                <span>{details.weight && `${details.weight / 10 } kg`}</span>
                            </div>

                            <hr/>

                            <div className="height">
                                <h4>Altura:</h4>
                                <span>{details.height && `${details.height / 10} m`}</span>
                            </div>

                            <hr/>

                            <div>
                                <h4>Habilidades:</h4>
                                <div className="abilities">
                                    {details.abilities && details.abilities.map((element) => (
                                        <span className="abilitiesPokemon"  key={element}>{element}</span>
                                    ))}
                                </div>
                            </div>

                            <hr/>

                            <div>
                                <h4>Movimentos:</h4>
                                <div className="moves">
                                    {details.moves && details.moves.map((element) => (
                                        <span className="movesPokemon"  key={element}>{element}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </WrapperModal>
                </Modal.Body>
            </Modal>
        </Wrapper>
    )
}

export default Home;