import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";

import { myContext } from "../../app/context";
import { useContext } from "react";
import Register from "../Register/Register";
import Product from "../Product/Product";
import Favourite from "../Favourite/Favourite";

function Body() {
    const { state } = useContext(myContext);
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"} replace />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {state.global?.recipe?.id !== ""

                    ? (<Route path="/recipedetail" element={<Product />} />)

                    : null

                }
                {state.global.token !== "" ? (
                    <Route path="/favourite" element={<Favourite />} />
                ) : null}
            </Routes>
        </>
    );
}

export default Body;



