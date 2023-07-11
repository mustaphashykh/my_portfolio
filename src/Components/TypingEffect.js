import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
    return (
        <div>
            <ReactTypingEffect
                text={['MERN stack developer', 'Mobile App developer', 'React App developer']}
                cursorRenderer={(cursor) => {
                    return <h1 style={{ color: '#be50f4', fontWeight: 'bolder' }}>{cursor}</h1>
                }}
                displayTextRenderer={(text, i) => {
                    return <h1 style={{ color: 'white', fontWeight: 'bolder' }
                    }>{text}</h1>
                }}
            />
        </div>
    );
};
export default TypingEffect;