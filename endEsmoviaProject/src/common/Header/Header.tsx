import React, {useContext, useEffect, useState} from 'react';
import Surfer from "../Surfer/Surfer";
import {Tabs} from '@mantine/core';
import "./Header.css"
import {myContext} from "../../app/context.js"
import { jwtDecode } from "jwt-decode";
import {CredencialsResult} from "../../interfaces";

const Header = () => {
    const { state, SetAuth } = useContext(myContext);
    const [decodedName, setDecodedName] = useState("")
    useEffect(() => {
        //This follows the value of state
        if(state.global.token !== ""){
            //I will decipher the token....
            let decoded : CredencialsResult= jwtDecode(state.global.token)
            console.log(decoded, "dvfdgdg")
            setDecodedName(decoded?.firstName)

        }
    }, [state]);
    return (
        <div className="header-design">
            <Tabs defaultValue="first">
                {state.global.token === "" ?
                    <Tabs.List>
                        <Tabs.Tab value="home">
                            <Surfer path={"/home"} destiny={"Home"}/>
                        </Tabs.Tab>
                        <Tabs.Tab value="login">
                            <Surfer path={"/login"} destiny={"Login"}/>
                        </Tabs.Tab>
                        <Tabs.Tab value="register">
                            <Surfer path={"/register"} destiny={"Register"}/>
                        </Tabs.Tab>
                    </Tabs.List> :
                    <Tabs.List>
                        <Tabs.Tab value="home">
                            <Surfer path={"/home"} destiny={"Home"}/>
                        </Tabs.Tab>
                        <Tabs.Tab value="profile">
                            <Surfer path={"/profile"} destiny={decodedName}/>
                        </Tabs.Tab>
                        <Tabs.Tab value="logout">
                            <div onClick={()=>SetAuth("token", "")}>
                                <Surfer path={"/"} destiny={"log out"} />
                            </div>
                        </Tabs.Tab>
                    </Tabs.List>
                }

            </Tabs>

        </div>
    );
};

export default Header;