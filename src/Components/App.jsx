import React, {useState} from 'react';

const App = () => {
    const [headingText, setHeadingText] = useState("Hello");

    const handleClick = () =>{
        setHeadingText("Submitted");
    }

    const [color, setColor] = useState({backgroundColor: "white"});

    const onHover = () => {
        setColor({backgroundColor: "black"});
    }

    const onOut = () => {
        setColor({backgroundColor: "white"});
    }

    return (
        <div className='container'>
            <h1>{headingText}</h1>
            <input type='text' placeholder="What's your name?" />
            <button style={color} onMouseOver={onHover} onMouseOut={onOut} onClick={handleClick}>Submit</button>
        </div>
    );
}

export default App;