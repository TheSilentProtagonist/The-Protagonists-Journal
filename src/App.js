import Textfield from "./components/Textfield";
import JournalEntry from "./components/JournalEntry";
import { useState } from "react";



function App(props) {
    const [journalEntries, setJournalEntries] = useState(JSON.parse(localStorage.getItem('journal')) || [])

    

    return (
    <>
    
        <Textfield setJournalEntries={setJournalEntries}/>
        {journalEntries.map( (entry, index) => {
            return(

                <JournalEntry key={index} entry={entry}/>

            )
        })}
        

    </>
    )
}

export default App;
