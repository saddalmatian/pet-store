import {useState} from 'react';
import React from 'react';

const UseModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
        
    
};
export default UseModal;