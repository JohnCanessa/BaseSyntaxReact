// **** MUST import for any component you create ****
import React from 'react';

// **** import style ****
import './UserOutput.css';

// **** UserOutput two paragraphs
//      Pass a username (of your choice) to UserOutput via props and display it there ****
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName} </p>
            <p>I hope I'll be overwritten!</p>
        </div>
    );
};

// ***** MUST export for the object to be used ****
export default userOutput;