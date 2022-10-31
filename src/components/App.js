import GlobalStyle from "../styles/global.style"
import SignIn from "../pages/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

export default function App() {

    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<SignIn/>}/>
                    <Route path = "/home" element = {<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}