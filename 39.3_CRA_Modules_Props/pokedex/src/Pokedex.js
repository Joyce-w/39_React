import Pokecard from './Pokecard'
import "./Pokedex.css"


const Pokedex = ({pokemon}) => {
    return (
        (
            pokemon.map(p => (
                    <Pokecard name={p.name} id={p.id} type={p.type} base_experience={p.base_experience}/>
        )))
    )
}

export default Pokedex;            
