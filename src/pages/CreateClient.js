import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Mold from "./Mold"
import ButtonBox from "../components/ButtonBox"
import { Select, Input, CreateContainer, Inputs } from "../styles/common.style"

export default function CreateClient() {

    const urlStates = "http://www.geonames.org/childrenJSON?geonameId=3469034"
    const [states, setStates] = useState([])

    useEffect(async () => {
        const promise = (await axios.get("http://www.geonames.org/childrenJSON?geonameId=3469034")).data.geonames
        setStates(promise)
    }, [])

    return (
        <Mold>
            <CreateContainer>
                <Box>
                    <form>
                        <Inputs>
                            <Input type = "text" placeholder = "nome do cliente"/>
                            <Input type = "email" placeholder = "email do cliente"/>
                            <Input type = "text" placeholder = "cpf do cliente"/>
                        </Inputs>
                        <Inputs>
                            <Input type = "date"/>
                            <Input type = "text" placeholder = "telefone"/>
                        </Inputs>
                        <Inputs>
                            <Input type = "text" placeholder = "nome da rua"/>
                            <Input type = "text" placeholder = "número"/>
                        </Inputs>
                        <Inputs>
                            <Input type = "text" placeholder = "cidade"/>
                            <Input type = "text" placeholder = "cep"/>
                            <Select>
                                {states.map((value, index) => <option>{value.name}</option>)}
                            </Select>
                        </Inputs>
                        <ButtonBox>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>cliente</strong>!</p>
                        </ButtonBox>
                    </form>
                </Box>
            </CreateContainer>
        </Mold>
    )
}

const Box = styled.div`
    width: 54vw;    
    height: 440px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    && .description {
        width: 540px;
    }
`