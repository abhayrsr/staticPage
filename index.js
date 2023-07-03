// ReactDOM.render(<h1> Hello Everyone!!</h1>, document.getElementById("root"));
// ReactDOM.render(<ul><li>Banana</li><li>Orange</li><li>Apple</li></ul>, document.getElementById("list"));
const page = (
    <div>
        <h1 className = "header">This is JSX</h1>
    </div>
)

ReactDOM.render(page, document.getElementById("list"));

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
