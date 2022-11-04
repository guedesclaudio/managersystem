import styled from "styled-components"
import { ThreeDots  } from "react-loader-spinner"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { handleForm } from "../helpers/handleForm"
import { FcOpenedFolder } from "react-icons/fc"
import { postLogin } from "../services/api.js"
import { UserContext } from "../contexts/UserContext"

export default function SignIn() {
    
    const {userData, setUserData, config, setConfig} = useContext(UserContext)
    const [load, setLoad] = useState("login")
    const [form, setForm] = useState({})
    const [disabled, setDisabled] = useState("")
    const [background, setBackground] = useState("#FFFFFF")
    const [color, setColor] = useState("grey")
    const [alert, setAlert] = useState("")
    const navigate = useNavigate()


    function login (event) {

        event.preventDefault()
        disabledForm()
        setAlert("")
        setTimeout(sendLogin, 2000)
    }

    async function sendLogin() {
        console.log(form)
        try {
            const response = await postLogin(form)
            const {token, username} = response.data
            
            localStorage.setItem("user", JSON.stringify({...form, token, username}))
            setUserData({...userData, token, username})
            setConfig({...config, 
                headers: {
                    "Authorization": `Bearer ${token}`
            }})

            navigate("/home")

        } catch (error) {

            const status = error.response.status
            enabledForm()

            if (status === 400 || status === 401) {
               setAlert("usuário ou senha inválidos")
                return
            }
            //alert("Ops! Tivemos um problema e estamos trabalhando nisso.")
        }
    }

    function disabledForm() {
        setLoad(<ThreeDots  color="black" height={40} width={40}/>)
        setDisabled("disabled")
        setBackground("#A328D6")
        setColor("#FFFFFF")
    }

    function enabledForm() {
        setLoad("Entrar")
        setDisabled("")
        setBackground("#FFFFFF")
        setColor("#000000")
    }


    return (
        <Container>
            <Template>
                <FcOpenedFolder size = {80}/>
                <Logo>Manager System</Logo>
            </Template>
            <LoginBox>
                <Inputs>
                    <form onSubmit = {login}>
                        <input type = "text" placeholder = "login" name = "username" disabled = {disabled} background = {background} color = {color}
                        onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        <input type = "password" placeholder = "senha" name = "password" disabled = {disabled} background = {background} color = {color}
                        onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        <Alert>{alert}</Alert>
                        <button type = "submit" disabled = {disabled}>{load}</button>
                    </form>  
                </Inputs>
            </LoginBox>
        </Container>
    ) 
}

const Container = styled.div`
    margin: 160px auto;
    width: 400px;

    && img {
        width: 150px;
    }
`
const Template = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Logo = styled.h1`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: white;
    margin: 20px 0;
`
const LoginBox = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 6px;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    

    && input {
        width: 80%;
        height: 40px;
        border-radius: 6px;
        margin-bottom: 30px;
        outline: none;
        border: none;
        background-color: ${props => props.background};
        color: ${props => props.color};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        padding-left: 14px;
        font-weight: 400;
    }

    && input::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    && button {
        margin-top: 100px;
        width: 40%;
        height: 30px;
        border-radius: 6px;
        border: none;
        background-color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    && button:hover {
        filter: brightness(0.8);
    }
`
const Inputs = styled.div`
    margin-top: 80px;

    && form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
    }
`
const Alert = styled.p`
    color: red;
    height: 30px;
    font-family: 'Roboto', sans-serif;
`