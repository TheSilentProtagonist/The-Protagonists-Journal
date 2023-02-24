import React from 'react';

function EntryCard() {
    return (
        <>
            {/* Entry content */}
            <div className="entry-card col-9">
                <div className="content-box">
                    <div className="title-box">
                        <div className="date-holder">
                            <h6>Fri 24 Feb 02:46</h6>
                        </div>

                        <div className="title-holder">
                            <h5>Todays Placeholder Entry</h5>
                        </div>
                    </div>

                    <div className="entry-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci fugit esse, sit quo voluptate non
                            fuga harum recusandae, sed ipsum quidem fugiat
                            quaerat deserunt nam expedita. Eaque sed in ratione?
                        </p>
                    </div>
                </div>
                {/* buttons tags and lower half */}

                <div className="tag-holder">
                    

                </div>

                <div className="button-box">


                </div>
            </div>
        </>
    );
}

export default EntryCard;
