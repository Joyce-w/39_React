const App = () => {
    return (
        <div>
            <Person name="candy" age="19" hobbies={['eating', 'dining', 'playing']} />
                <Button text="First Button"/>
            <Person name="Alexandar" age="19" hobbies={['eating', 'dining', 'playing']} />
                <Button text="Click Me"/>
            <Person name="JungyoonLee" age="12" hobbies={['eating', 'dining', 'playing']} />
                <Button text="Last Button"/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"))