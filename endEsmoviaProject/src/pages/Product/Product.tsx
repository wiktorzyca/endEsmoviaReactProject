import React, {useContext, useEffect} from 'react';
import {myContext} from "../../app/context";
import "./Product.css"
import {useNavigate} from "react-router-dom";
import {CredencialsErrors} from "../../interfaces";
const Product = () => {
    const { state, SetAuth } = useContext(myContext)
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(state, "fgrfgfdgdrf")
    }, [state])

    const addToFavourite = () => {
        const newState = [...state.global.favourite, state.global.recipe]
        SetAuth("favourite", newState);
    }
    const deleteFromFavourite = () => {
        console.log("delet")
        const newState = state.global.favourite.filter(function(el) { return el.id != state.global.recipe.id});
        SetAuth("favourite", newState);
    }

    return(
        <div className="detail-design">
            {
                state.global.favourite.find(r=> r.id== state.global.recipe.id) !==undefined?
                    <button onClick={()=>deleteFromFavourite()}>delete from favourite</button>
                    : <button onClick={()=>addToFavourite()}>add to favourite</button>
            }

            <img src={state.global.recipe.image}/>
            <h1>{state.global.recipe.name}</h1>
            <p>time: {state.global.recipe.cookTimeMinutes}</p>
            <p>calories per serving: {state.global.recipe.caloriesPerServing}</p>
            <button onClick={()=>navigate("/")} name="back">back</button>
        </div>
    )
};

export default Product;