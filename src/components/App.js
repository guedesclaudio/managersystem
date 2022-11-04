import GlobalStyle from "../styles/global.style"
import SignIn from "../pages/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import CreateProducts from "../pages/CreateProducts"
import Clients from "../pages/Clients"
import CreateClient from "../pages/CreateClient"
import Categories from "../pages/Categories"
import CreateCategory from "../pages/CreateCategory"

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
                    <Route path = "/see-orders" element = {<Home/>}/>
                    <Route path = "/register-orders" element = {<Home/>}/>
                    <Route path = "/see-categories" element = {<Categories/>}/>
                    <Route path = "/register-category" element = {<CreateCategory/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}