import GlobalStyle from "../styles/global.style"
import SignIn from "../pages/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import CreateProducts from "../pages/CreateProducts"
import Clients from "../pages/Clients"
import CreateClient from "../pages/CreateClient"

export default function App() {

    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<SignIn/>}/>
                    <Route path = "/home" element = {<Home/>}/>
                    <Route path = "/see-products" element = {<Products/>}/>
                    <Route path = "/register-product" element = {<CreateProducts/>}/>
                    <Route path = "/see-clients" element = {<Clients/>}/>
                    <Route path = "/register-client" element = {<CreateClient/>}/>
                    <Route path = "/clients" element = {<Home/>}/>
                    <Route path = "/orders" element = {<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}