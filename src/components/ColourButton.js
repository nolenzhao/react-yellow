import React from "react"
import {useState} from 'react';

const ColourButton = (props) => {
   
    const [colour, setColour] = useState(props.imiginit);

    return(
        <button  onClick = {()=> setColour(props.imgsrc)}style = {{backgroundColor: props.color}} className = "actualbuttons"> </button>
    )
}

export default ColourButton