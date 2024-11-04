import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import style from './GoBackButton.module.css'

const GoBackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleGoBack = () => {
        navigate(location.state.from); 
    };

    return (
        <div className={style.container}>
             <button onClick={handleGoBack}>
              Go back
             </button>
        </div>
       
    );
};

export default GoBackButton;
