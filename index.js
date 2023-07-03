// ReactDOM.render(<h1> Hello Everyone!!</h1>, document.getElementById("root"));
// ReactDOM.render(<ul><li>Banana</li><li>Orange</li><li>Apple</li></ul>, document.getElementById("list"));
const page = (
    <div>
        <h1 className = "header">This is JSX</h1>
    </div>
)

ReactDOM.render(page, document.getElementById("list"));

const list =(
    <nav>
        <h1 className = "website"> My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Career</li>
        </ul>
    </nav>
)

ReactDOM.render(list, document.getElementById("nav"))

function MainContent(){
    return (
    <h1>I'm learning react</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)
