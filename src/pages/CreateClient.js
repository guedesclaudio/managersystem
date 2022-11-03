import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"


export default function CreateClient() {

    const urlStates = "http://www.geonames.org/childrenJSON?geonameId=3469034"
    const [states, setStates] = useState([])

    useEffect(async () => {
        const promise = (await axios.get("http://www.geonames.org/childrenJSON?geonameId=3469034")).data.geonames
        setStates(promise)
    }, [])

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <CreateContainer>
                <Box>
                    <form>
                        <Inputs>
                            <input type = "text" placeholder = "nome do cliente"/>
                            <input type = "email" placeholder = "email do cliente"/>
                            <input type = "text" placeholder = "cpf do cliente"/>
                        </Inputs>
                        <Inputs>
                            <input type = "date"/>
                            <input type = "text" placeholder = "telefone"/>
                        </Inputs>
                        <Inputs>
                            <input type = "text" placeholder = "nome da rua"/>
                            <input type = "text" placeholder = "número"/>
                        </Inputs>
                        <Inputs>
                            <input type = "text" placeholder = "cidade"/>
                            <input type = "text" placeholder = "cep"/>
                            <select>
                                {states.map((value, index) => <option>{value.name}</option>)}
                            </select>
                        </Inputs>
                        <Button>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>cliente</strong>!</p>
                        </Button>
                    </form>
                </Box>
            </CreateContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 400px;
`
const Inputs = styled.div`

`
const CreateContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 54vw;    
    height: 440px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    
    && input {
        width: 300px;
        height: 40px;
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 6px;
        border: none;
        background-color: #ADD8E6;
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        outline: none;
    }

    && input::placeholder {
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
    }

    && .description {
        width: 540px;
    }

    && select {
        width: 150px;
        height: 40px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        outline: none;
        padding-left: 10px;
        background-color: #ADD8E6;
        border: none;
        border-radius: 6px;
        margin-right: 10px;
    }

    && button {
        
        width: 150px;
        height: 40px;
        border-radius: 6px;
        border: none;
        background-color: #ADD8E6;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        cursor: pointer;
    }

    && button:hover {
        filter: brightness(0.8);
    }
`
const Button = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 60px;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: green;
        margin-left: 20px;
    }
`