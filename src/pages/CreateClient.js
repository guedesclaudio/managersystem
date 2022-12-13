import axios from "axios"
import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import Mold from "./Mold"
import ButtonBox from "../components/ButtonBox"
import { Select, Input, CreateContainer, Inputs } from "../styles/common.style"
import { postClient } from "../services/api"
import { handleForm } from "../helpers/handleForm"
import { UserContext } from "../contexts/UserContext"



export default function CreateClient() {

    const [states, setStates] = useState([])
    const [form, setForm] = useState({})
    const {config} = useContext(UserContext)

    function treatEvent(event) {
        event.preventDefault()
        console.log(form)
        sendClient()
    }

    async function sendClient() {
        form.stateId = 2
        try {
            await postClient(form, config)
            alert(`Client ${form.name} cadastrado com sucesso!`)
            clearInput()

        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }

    function clearInput() {
        setForm({})
    }

    useEffect(async () => {
        const promise = (await axios.get("http://www.geonames.org/childrenJSON?geonameId=3469034")).data.geonames
        setStates(promise)
    }, [])

    return (
        <Mold>
            <CreateContainer>
                <Box>
                    <form onSubmit={treatEvent}>
                        <Inputs>
                            <Input type = "text" placeholder = "nome do cliente" name = "name" value = {form.name ? form.name : ""}
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Input type = "email" placeholder = "email do cliente" name = "email" value = {form.email ? form.email : ""}
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Input type = "text" placeholder = "cpf do cliente" name = "cpf" value = {form.cpf ? form.cpf : ""}
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        </Inputs>
                        <Inputs>
                            <Input type = "date" name = "birthday" 
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Input type = "text" placeholder = "telefone" name = "phone" value = {form.phone ? form.phone : ""} 
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        </Inputs>
                        <Inputs>
                            <Input type = "text" placeholder = "nome da rua" name = "streetName" value = {form.streetName ? form.streetName : ""} 
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Input type = "text" placeholder = "número" name = "houseNumber" value = {form.numberHouse ? form.numberHouse : ""} 
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Input type = "text" placeholder = "bairro" name = "districtName" value = {form.districtName ? form.districtName : ""} 
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                        </Inputs>
                        <Inputs>
                            <Input type = "text" placeholder = "cidade" name = "cityName" value = {form.cityName ? form.cityName : ""}
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Input type = "text" placeholder = "cep" name = "cep" value = {form.cep ? form.cep : ""} 
                            onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}/>
                            <Select name = "stateId" onChange = {event => handleForm({name: event.target.name, value: event.target.value}, form, setForm)}>
                                <option selected = "selected" value = {null}>estados</option>
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