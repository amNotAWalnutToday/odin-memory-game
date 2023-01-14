import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [dot1, setDot1] = useState(false); 
    const [dot2, setDot2] = useState(false); 
    const [dot3, setDot3] = useState(false); 

    useEffect(() => {
        if(!dot1){
            setTimeout(() => setDot1(true), 200);
        } else if(!dot2) {
            setTimeout(() => setDot2(true), 200);
        } else if(!dot3) {
            setTimeout(() => setDot3(true), 200);
        }
    }, [dot1, dot2, dot3]);

    return(
        <div className="card loading">
            <h2>Loading{dot1 ? '.' : ' '}{dot2 ? '.' : ' '}{dot3 ? '.' : ' '}</h2>
        </div>
    )
}

export default Loading;
