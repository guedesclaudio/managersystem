import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import { handleForm } from "../helpers/handleForm"
import { postProduct, getCategories } from "../services/api"
import { UserContext } from "../contexts/UserContext"
import Mold from "./Mold"
import ButtonBox from "../components/ButtonBox"
import { Select, Input, CreateContainer, Inputs } from "../styles/common.style"

export default function CreateProducts() {

    const [form, setForm] = useState({})
    const [categoriesData, setCategoriesData] = useState([])
    const {config} = useContext(UserContext)

    function treatEvent(event) {
        event.preventDefault()
        sendProduct()
    }

    async function sendProduct() {

        const {price} = form
        const priceFormated = price?.replace(",", ".")
        form.price = priceFormated
        
        try {
            await postProduct(form, config)
            alert(`Produto ${form.product} cadastrado com sucesso!`)
            
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }

    useEffect(async () => {
        try {
            const result =  (await getCategories(config)).data
            setCategoriesData(result)
            
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <Mold>
            <CreateContainer>
                <Box>
                    <form onSubmit = {treatEvent}>
                        <Inputs>
                            <Input type = "text" placeholder = "nome do produto" name = "product"
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Input type = "text" placeholder = "descrição do produto" className = "description" name = "description"
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        </Inputs>
                        <Inputs>
                            <Input type = "text" placeholder = "preço do produto" name = "price"
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Select name = "category" onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}>
                                <option selected = "selected" value = {null}>categorias</option>
                                {categoriesData.map((value, index) => <option key = {index} value = {value.id}>{value.name}</option>)}
                            </Select>
                        </Inputs>
                        <ButtonBox>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>produto</strong>!</p>
                        </ButtonBox>
                    </form>
                </Box>
            </CreateContainer>
        </Mold>
    )
}

const Box = styled.div`
    width: 50vw;    
    height: 300px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    && .description {
        width: 540px;
    }
`