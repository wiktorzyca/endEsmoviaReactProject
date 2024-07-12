import React, {useContext, useEffect, useState} from 'react';
import Surfer from "../Surfer/Surfer";
import {Tabs} from '@mantine/core';
import "./Header.css"
import {myContext} from "../../app/context.js"
import {jwtDecode} from "jwt-decode";
import {CredencialsResult, StateApp} from "../../interfaces";
import CInput from "../CInput/CInput";

const Header = () => {
    const {state, SetAuth} = useContext<StateApp>(myContext);
    const [decodedName, setDecodedName] = useState<string>("")
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        SetAuth("search", search)
    }, [search])

    useEffect(() => {
        if (state.global.token !== "") {
            let decoded: CredencialsResult = jwtDecode(state.global.token)
            setDecodedName(decoded?.firstName)
        }
    }, [state]);

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="header-design">
            <Tabs defaultValue="first">
                {state.global.token === "" ?
                    <Tabs.List>
                        <Tabs.Tab value="search" leftSection={<CInput
                            type="text"
                            name="search"
                            placeholder=""
                            design="basic-input"
                            emitFunction={inputHandler}
                            errorCheck={() => {
                            }}
                        />}/>
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
                        <Tabs.Tab value="profile">
                            <Surfer path={"/favourite"} destiny={"Favourite"}/>
                        </Tabs.Tab>
                        <Tabs.Tab value="logout">
                            <div onClick={() => SetAuth("token", "")}>
                                <Surfer path={"/"} destiny={"log out"}/>
                            </div>
                        </Tabs.Tab>
                    </Tabs.List>
                }

            </Tabs>

        </div>
    );
};

export default Header;