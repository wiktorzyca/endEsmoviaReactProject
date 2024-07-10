import React from 'react';
import Surfer from "../Surfer/Surfer";
import {Tabs} from '@mantine/core';
import "./Header.css"

const Header = () => {
    return (
        <div className="header-design">
            <Tabs defaultValue="first">
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
                </Tabs.List>
            </Tabs>

        </div>
    );
};

export default Header;