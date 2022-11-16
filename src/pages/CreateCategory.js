import styled from "styled-components"
import { useState, useContext } from "react"
import { handleForm } from "../helpers/handleForm"
import { postCategory } from "../services/api"
import { UserContext } from "../contexts/UserContext"
import Mold from "./Mold"
import ButtonBox from "../components/ButtonBox"
import { Input, Inputs, CreateContainer } from "../styles/common.style"

export default function CreateCategory() {

    const [form, setForm] = useState({})
    const {config} = useContext(UserContext)

    function treatEvent(event) {
        event.preventDefault()
        sendCategory()
    }

    async function sendCategory() {

        try {
            await postCategory(form, config)
            alert(`Categoria ${form.category} cadastrada com sucesso!`)
            
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }

    return (
        <Mold>
            <CreateContainer>
                <Box>
                    <form onSubmit = {treatEvent}>
                        <Inputs>
                            <Input type = "text" placeholder = "nome da categoria" name = "category"
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        </Inputs>
                        <ButtonBox>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre uma nova <strong>categoria</strong>!</p>
                        </ButtonBox>
                    </form>
                </Box>
            </CreateContainer>
        </Mold>
    )
}
const Box = styled.div`
    width: 30vw;    
    height: 160px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;
`