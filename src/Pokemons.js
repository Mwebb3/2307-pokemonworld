import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Pokemons = ({pokemons, setPokemons}) => {
  const [name, setName] = useState('');

  const submit = async(event) => {
    event.preventDefault();
    const newPokemon = {name};
    const {data} = await axios.post('/api/pokemons', newPokemon);
    console.log(newPokemon);
    console.log(data);
    setPokemons([...pokemons, data])
  }

    return (
      <div>
        <h1>All the Pokemon</h1>
        {
          pokemons.map((pokemon) => {
            return(
                <div key={pokemon.id}>
                    <Link to={`/pokemon/${pokemon.id}`}><h3 >{pokemon.name}</h3></Link>
                </div>
              
            )
          })
        }
        <form onSubmit={submit}>
          <label>
              Add Pokemon:
              <input type="text" onChange={ev => setName(ev.target.value)}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

export default Pokemons