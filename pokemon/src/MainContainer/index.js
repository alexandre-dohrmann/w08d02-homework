import React, { Component } from 'react';
import Pokedex from '../Pokedex';


class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
        }
        console.log(this.state);
    }
    getPokemons = async () => {
        try {
            const pokies = await fetch('http://pokeapi.salestock.net/api/v2/pokemon/');
            let pokiesJson = await pokies.json();
            pokiesJson = pokiesJson.results
            return pokiesJson;
            console.log(pokiesJson, ' this is the pokemon')
        } catch (err) {
            return err;
            console.log(err, 'this pokemon escaped')
        }
    }
    componentDidMount() {
        this.getPokemons().then((data) => {
            console.log(data, ' this is the pokemon data');
            this.setState({ pokemons: data })
        });
    }

    render() {
        return (
            <div className="App">
                <Pokedex pokemons={this.state.pokemons}/>
            </div>
        );
    }
}

export default MainContainer;