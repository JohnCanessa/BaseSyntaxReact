// **** MUST import for any component you create ****
import React from 'react';

// **** UserInput should hold an input element
//      ensure that the new input entered by the user overwrites the old username passed to UserOutput ****
const userInput = (props) => {

    // **** on-line style ****
    const inputStyle = {
        border: '2px solid red',
        height: 25
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />;
}

// ***** MUST export for the object to be used ****
export default userInput;