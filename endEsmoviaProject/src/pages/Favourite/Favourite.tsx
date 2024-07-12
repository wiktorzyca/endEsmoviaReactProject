import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";

const Favourite = () => {
    const { state, SetAuth } = useContext(myContext)
    const navigate = useNavigate();
    return (
        <div>
            
        </div>
    );
};

export default Favourite;