import React from 'react';

function Header(props) {

const entriesStorage = [
    
]

const entryCounter = prop.entries.length


    return (
        <>
            <header>
                <nav>
                    <div className="weekTracker">
                        <div className="dailyEntryTracker-Mon">
                            {props.entryCounter}
                        </div>

                        <div className="dailyEntryTracker-Tue">
                            {props.entryCounter}
                        </div>
                        <div className="dailyEntryTracker-Wed">
                            {props.entryCounter}
                        </div>
                        <div className="dailyEntryTracker-Thu">
                            {props.entryCounter}
                        </div>
                        <div className="dailyEntryTracker-Fri">
                            {props.entryCounter}
                        </div>
                        <div className="dailyEntryTracker-Sat">
                            {props.entryCounter}
                        </div>
                        <div className="dailyEntryTracker-Sun">
                            {props.entryCounter}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
