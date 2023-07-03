// ReactDOM.render(<h1> Hello Everyone!!</h1>, document.getElementById("root"));
ReactDOM.render(<ul><li>Banana</li><li>Orange</li><li>Apple</li></ul>, document.getElementById("list"));

function mainContent(){
    return <h1>I'm learning react</h1>
}

ReactDOM.render(
    <div>
        <mainContent />
    </div>,
    document.getElementById("root")
    
)
