import "./Pokecard.css"

const Pokecard = ({ name, id, type, base_experience }) => {
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div id="Pokecard">
            <h3  class="Pokecard-h3">{name}</h3>
            <img class="Pokecard-img"src={image} alt={name}></img>
            <span>
                <p class="Pokecard-type">Type: {type}</p>
                <p>EXP: {base_experience}</p>
            </span>
        </div>
    )
}

export default Pokecard;