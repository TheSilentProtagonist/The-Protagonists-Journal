import {useState} from "react";
import moment from "moment";


const Textfield = (props) => {
    const [entry, setEntry] = useState("")
    const handleChange = (event) => {
        setEntry(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        props.setJournalEntries( (oldState) => {
            const newData = [...oldState, {

                text: entry,
                date: moment().format("dddd-DDD-MMMM-YYYY")

            }]
            localStorage.setItem("journal", JSON.stringify(newData))
            return newData
        } )

    }

    return (
        
        <>
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} type="text" />
                <button>Submit Entry</button>
            </form>
            
        </>

        
    );
};

export default Textfield;
