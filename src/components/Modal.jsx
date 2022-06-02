import React from "react";

import '../styles/Modal.css';


const Modal = ({ children, visible, setVisible, isVision }) => {

    const rootClasses = ['myModal']
    if (visible) {
        rootClasses.push('active')
    }

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <div 
            className={rootClasses.join(' ')} 
            onClick={() => setVisible(false)}
        >
            <div 
                className={'myModalContent'+clazzz} 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;
                                                                                                                                                                