const App = () => {
    return (
        <div>
            <Person name="candy" age="19" hobbies={ ['eating', 'dining','playing']}/>
            <Person name="Alexandar" age="19" hobbies={['eating', 'dining', 'playing']}/>
                <Person name="JungyoonLee" age="12" hobbies={['eating', 'dining', 'playing']}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"))