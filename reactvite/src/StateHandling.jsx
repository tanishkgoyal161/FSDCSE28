import React, { useState } from 'react';
import cat from './images/cat.jpg'

function StateHandling() {
    const [count, setCount] = useState(0);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [catHeight, setCatHeight] = useState(150);
    const [catAngle, setCatAngle] = useState(30);

    function changeBGColor() {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }

    function enhanceCatHeight() {
        setCatHeight(catHeight + 20);
    }
    function imageRotate() {
        setCatAngle(catAngle + 30);
    }

    return (
        <div>
            <h2>Change Background Color</h2>
            <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: '2px solid red', height: catHeight + 20, width: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px auto' }}>
                <img src={cat} style={{ height: catHeight, width: 'auto', transform: `rotate(${catAngle}deg)` }} alt="Cat" ></img>
            </div>

            <div>
                <div>
                    <h2>
                        color code : {`rgb(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)})`}
                    </h2>
                </div>

                <button onClick={changeBGColor}>Change Color</button>
                <button onClick={enhanceCatHeight}>Enhance Cat Height</button>
                <button onClick={() => setCatAngle(catAngle + 30)}>Rotate Cat</button>
            </div>
        </div>
    )
}

export default StateHandling;