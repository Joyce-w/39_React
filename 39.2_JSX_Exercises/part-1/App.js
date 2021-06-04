const App = () => {
    return (
       <div>
            <FirstComponent />
            <NamedComponent name="Joyce"/>
    </div>
   ) 
}

ReactDOM.render(<App/>, document.getElementById("root"))