import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"
import { useEffect, useState, useContext } from "react"
import { handleForm } from "../helpers/handleForm"
import { postProduct, getCategories } from "../services/api"
import { UserContext } from "../contexts/UserContext"

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
        <Container>
            <BodyStyle/>
            <SideBar/>
            <CreateContainer>
                <Box>
                    <form onSubmit = {treatEvent}>
                        <Inputs>
                            <input type = "text" placeholder = "nome do produto" name = "product"
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <input type = "text" placeholder = "descrição do produto" className = "description" name = "description"
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        </Inputs>
                        <Inputs>
                            <input type = "text" placeholder = "preço do produto" name = "price"
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <select name = "category" onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}>
                                <option selected = "selected" value = {null}>categorias</option>
                                {categoriesData.map((value, index) => <option key = {index} value = {value.id}>{value.name}</option>)}
                            </select>
                        </Inputs>
                        <Button>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre um novo <strong>produto</strong>!</p>
                        </Button>
                    </form>
                </Box>
            </CreateContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 400px;
`
const CreateContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 50vw;    
    height: 300px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    
    && input, && textarea {
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
const Inputs = styled.div`

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