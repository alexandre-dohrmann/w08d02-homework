import React from 'react';

const Pokedex = (props) => {
    const pokedex = props.pokemons.map((pokemon, index) => {
        return (
            <div key={index}><h4>{pokemon.name}</h4>
            <p>{pokemon.url}</p>
            </div>
        )
    });
    return(
        <div>
        <h3>Your Pokedex Consists of:</h3>
        <ul>
            {pokedex}
        </ul>
        </div>
    )
}
export default Pokedex;
