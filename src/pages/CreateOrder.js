import styled from "styled-components"
import ButtonBox from "../components/ButtonBox"
import Mold from "./Mold"
import { Select, Input, Button, CreateContainer } from "../styles/common.style"
import { useEffect, useState, useContext } from "react"
import { getCategories, postOrder } from "../services/api"
import { UserContext } from "../contexts/UserContext"
import { handleForm } from "../helpers/handleForm"


export default function CreateOrder() {

    const [categoriesData, setCategoriesData] = useState([])
    const {config} = useContext(UserContext)
    const [form, setForm] = useState({})

    useEffect(async () => {
        try {
            const result = (await getCategories(config)).data
            setCategoriesData(result)
            
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }, [])

    function treatEvent(event) {
        event.preventDefault()
        console.log(form)
        sendOrder()
    }

    async function sendOrder() {
        try {
            await postOrder(form, config)
            alert(`Pedido efetuado com sucesso!`)
            clearInput()

        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }

    function clearInput() {
        setForm({})
    }

    return (
        <Mold>
            <CreateContainer>
                <Box>
                    <form onSubmit={treatEvent}>
                        <Inputs className = "first">
                            <Input type = "text" placeholder = "nome do cliente" name = "name" value = {form.name ? form.name : ""}
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Total>
                                Total: R$ <strong>0,00</strong>
                            </Total>
                        </Inputs>
                        <Inputs>
                            <Select>
                                <option selected = "selected" value = {null} type = "submit">categorias</option>
                                {categoriesData.map((value, index) => <option key = {index} value = {value.id}>
                                {value.name}</option>)}
                            </Select>
                            <Select>
                                <option selected>produtos</option>
                            </Select>
                            <Input type = "number" placeholder = "quantidade" className = "quantidade" min = "1"/>
                            <Button>Adicionar produto</Button>
                        </Inputs>
                        <Inputs>
                            <Select>
                                <option>status</option>
                                <option>Em execução</option>
                                <option>Pago</option>
                                <option>Entregue</option>
                            </Select>
                        </Inputs>
                        <List>
                            <p></p>
                        </List>
                        <ButtonBox>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>pedido</strong>!</p>
                        </ButtonBox>
                    </form>
                </Box>
            </CreateContainer>
        </Mold>
    )
}

const Inputs = styled.div`
    margin-bottom: 10px;

    && select {
        margin-right: 10px;
    }
`
const Box = styled.div`
    width: 36vw;    
    min-height: 330px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    && .first {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    && .quantidade {
        width: 120px;
    }
    && .clients {
        width: 310px;
    }
`
const Total = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: green;
`
const List = styled.div`
    width: 50%;
    margin-top: 20px;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: grey;
        margin-bottom: 5px;
    }
`