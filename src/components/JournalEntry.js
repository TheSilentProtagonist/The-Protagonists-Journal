import React, { Component, useState } from "react";

import "../css/card.css"



const JournalEntry = (props) => {

    const [text, setText] = useState("");

    const updateText = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="card">
                <h1>{props.entry.text}</h1>
            </div>
    
        </>
    )
};

const populateEntry = () => {

    
    
    
};

export default JournalEntry;
