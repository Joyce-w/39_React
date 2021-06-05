const Person = (props) => {
    let age = props.age;
    let voteText = age > 18 ? "Please go vote!" : "You must be 18"
    let name = props.name;

    return (
        <div>
        <p>Learn some information about this person</p>
            <ul>
                <li> Name: { name.slice(0,6)} </li>
                <li> Age: {props.age} </li>
                <h3>{voteText}</h3>
            </ul>
            
            <ul>
                <b>Hobbies:</b>
                {props.hobbies.map(h => <li>{ h }</li>)}
            </ul>
        </div>
    )
}