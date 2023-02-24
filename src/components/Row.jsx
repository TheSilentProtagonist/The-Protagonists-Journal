import React from 'react';

import EntryCard from './EntryCard';

function Row() {
    return (
        <>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-9">

                    <EntryCard/>

                </div>
            </div>
        </>
    );
}

export default Row;
