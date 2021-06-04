const App = () => {
    return (
        <div>
             <Tweet username="canadianGirl" name="Mia" date="Jan 20, 2020" message="New video up!"/>
             <Tweet username="Colt" name="Steele" date="Jan 21, 2020" message="Free Tuition!"/>
             <Tweet username="joyjoy" name="joy" date="Mar 20, 2020" message="Nothing in my head"/>
        </div>
    )
   
}


ReactDOM.render(<App/>, document.getElementById("root"))