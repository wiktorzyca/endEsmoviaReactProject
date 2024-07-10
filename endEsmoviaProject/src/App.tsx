import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./common/Header/Header";
import Body from "./pages/Body/Body";
import Footer from "./common/Footer/Footer";

function App() {

    return (
        <>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </>
    )
}

export default App
