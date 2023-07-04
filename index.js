function Image(){
    return (
        <header>
            <nav className = "nav">
               <img src = "React-icon.svg (1).png" width = "70px"/>
               <ul className = "nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
               </ul>
            </nav>
            
        </header>
    )
}

function Header(){
    return (
        <h1>Reasons I'm excited about React</h1>
    )
}

function List(){
    return (
        <ol>
            <li>It's a popular library, so l'll be able to fit in with cool kids</li>
            <li>I'm more likely to get a job as a developer if I know React</li>
        </ol>
    )
}

function Footer(){
    return (
        <footer>
            <smalll>© 2021 Ziroll development. All rights reserved</smalll>
        </footer>
    )
}

ReactDOM.render(<Image />, document.getElementById("img"))
ReactDOM.render(<Header />, document.getElementById("head"))
ReactDOM.render(<List />, document.getElementById("list"))
ReactDOM.render(<Footer />, document.getElementById("footer"))
