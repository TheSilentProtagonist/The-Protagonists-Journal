import Entry from "./components/Entry";

function App() {
    return (
        <>
            <Entry />
            <input type = "text" />
            <button>Add Journal Entry</button>
            <button>Add Journal</button>
            <button>Clear Complete</button>
            <div>0 left to do</div>
        </>
    );
}



export default App;
