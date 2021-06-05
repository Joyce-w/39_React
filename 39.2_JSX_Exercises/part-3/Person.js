const Person = (props) => {
    let age = props.age;
    let name = props.name;

    return (
        <div>
        <p>Learn some information about this person</p>
            <ul>
                <li> Name: { name.length > 8 ? name.slice(0,6): name} </li>
                <li> Age: {props.age} </li>
                <h3>{age > 18 ? "Please go vote!" : "You must be 18"}</h3>
            </ul>
            
            <ul>
                <b>Hobbies:</b>
                {props.hobbies.map(h => <li>{ h }</li>)}
            </ul>
        </div>
    )
}