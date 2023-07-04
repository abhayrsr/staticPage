
const head = (
   <div><h1> Fun Facts About React</h1></div>
)

const list = (
    <div>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars over GitHub</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(head, document.getElementById("head"))
ReactDOM.render(list, document.getElementById("list"))
