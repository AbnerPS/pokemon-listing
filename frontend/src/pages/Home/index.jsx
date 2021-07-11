import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';
import Footer from '../../components/Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Pokeball from '../../assets/pokeball.png';
import { Modal } from 'rsuite';
import api from '../../api';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.main`
    width: 100%;
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
    }

`;

const CardContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
`;

const Pagination = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1em;

    & button {
        font-size: 1em;
        padding: 0.5em 1em;
        border: solid 1px #3a86ff;
        color: #3a86ff;
        background-color: transparent;
        cursor: pointer;
        border-radius: 0.5em;

        &:hover {
            color: white;
            background-color: #3a86ff;
            transition: 0.6s;
        }

    }

`;

const Home = () => {
    const [cards, setCards] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState({});

    useEffect(() => {
        api.get(`list`).then(({data}) => {
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setCards(data.results);
        })

    }, [])

    function handleNextPage() {
        axios.get(nextPage).then(({data}) => {
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setCards(data.results);
        })
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
            const name = data.name;
            const weight = data.weight;
            const height = data.height;
            let image = Pokeball;
            if (data.sprites.other.dream_world.front_default) {
                image = data.sprites.other.dream_world.front_default;
            } else if (data.sprites.other["official-artwork"].front_default) {
                image = data.sprites.other["official-artwork"].front_default;
            }

            data.types.forEach(slot => {
                types.push(slot.type.name);
            });

            data.abilities.forEach(slot => {
                abilities.push(slot.ability.name);
            });

            data.moves.forEach(slot => {
                moves.push(slot.move.name.replace("-", " "));
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

            console.log(moreInfo)

            setDetails(moreInfo);
            setShowModal(true);
        });
    }

    function hideDetails() {
        setShowModal(false);
    }

    function searchPokemon(value) {
        if (value) {
            api.get(`search?name=${value}`).then(({data}) => {
                setCards(data);
            })
        }
    }

    return (
        <Wrapper>
            <Header />
            
            <input type="search" placeholder="Pesquisar pokemon por nome" onChange={e => {searchPokemon(e.target.value)}}/>
            
            <CardContainer >
                {cards.map(pokemon => (
                    <div onClick={() => showDetails(pokemon.url)}>
                        <CardPokemon url={pokemon.url} key={pokemon.name} />
                    </div>
                ))}
            </CardContainer>
            
            <Pagination>
                {previousPage && <button onClick={handlePreviousPage}><FaArrowLeft /> Anterior</button>}
                {nextPage && <button onClick={handleNextPage}>Próximo <FaArrowRight /></button>}
            </Pagination>
            
            <Footer />

            <Modal size="lg" show={showModal} onHide={hideDetails}>
                <Modal.Header>
                    <Modal.Title>
                        <h2>Detalhes do Pokémon</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <WrapperModal>
                        <div className="image-name">
                            <img src={details.image} alt="Imagem grande do pokemon"></img>
                            <h2>{details.name}</h2>
                        </div>

                        <div className="details">
                            <div className="types">
                                <h4>Tipos:</h4>
                                {details.types && details.types.map((element) => (
                                    <span className="typesPokemon"  key={element}>{element}</span>
                                ))}
                            </div>

                            <hr/>

                            <div className="weight">
                                <h4>Peso:</h4>
                                {details.weight && details.weight}
                            </div>

                            <hr/>

                            <div className="height">
                                <h4>Altura:</h4>
                                {details.height && details.height}
                            </div>

                            <hr/>

                            <div className="abilities">
                                <h4>Habilidades:</h4>
                                {details.abilities && details.abilities.map((element) => (
                                    <span className="abilitiesPokemon"  key={element}>{element}</span>
                                ))}
                            </div>

                            <hr/>

                            <div className="moves">
                                <h4>Movimentos:</h4>
                                {details.moves && details.moves.map((element) => (
                                    <span className="movesPokemon"  key={element}>{element}</span>
                                ))}
                            </div>
                        </div>
                    </WrapperModal>
                </Modal.Body>
            </Modal>
        </Wrapper>
    )
}

export default Home;