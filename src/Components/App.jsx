/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';

const App = () => {
    const [name, setName] = useState("");
    const [headingText, setHeadingText] = useState(`Hello`);
    const [color, setColor] = useState({backgroundColor: "white"});
    
    const handleClick = () =>{
        setHeadingText(`Hello ${name}!`);
    }
    
    
    const onHover = () => {
        setColor({backgroundColor: "black"});
    }
    
    const onOut = () => {
        setColor({backgroundColor: "white"});
    }
    
    const handleChange = () => {
        setName(event.target.value);
    }
    
    return (
        <div className='container'>
            <h1>{headingText}</h1>
            <input 
                onChange={handleChange}
                type='text' 
                placeholder="What's your name?"
                value={name} 
            />

            <button 
                style={color} 
                onMouseOver={onHover} 
                onMouseOut={onOut} 
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    );
}

export default App;