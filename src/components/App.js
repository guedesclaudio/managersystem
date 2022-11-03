import GlobalStyle from "../styles/global.style"
import SignIn from "../pages/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import CreateProducts from "../pages/CreateProducts"

export default function App() {

    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<SignIn/>}/>
                    <Route path = "/home" element = {<Home/>}/>
                    <Route path = "/see-products" element = {<Products/>}/>
                    <Route path = "/create-product" element = {<CreateProducts/>}/>
                    <Route path = "/clients" element = {<Home/>}/>
                    <Route path = "/orders" element = {<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}