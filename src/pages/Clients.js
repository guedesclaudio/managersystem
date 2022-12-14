import styled from "styled-components"
import { BsTrash } from "react-icons/bs"
import { GrEdit } from "react-icons/gr"
import { IoAddCircle } from "react-icons/io5"
import { Link } from "react-router-dom"
import Mold from "./Mold"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { getClients, deleteClient } from "../services/api"

function Client({
    name, email, cpf, date, phone,
    stateName, houseNumber, cityName, cep, 
    streetName, clientId, config, setCallApi
    }) {

    async function removeClient() {
        const deleteConfirm = window.confirm(`Tem certeza que deseja excluir ${name}?`)
        
        try {
            if (deleteConfirm === true) {
                await deleteClient(clientId, config) 
                alert(`Cliente ${name} deletado com sucesso!`)
                setCallApi(true)
            }
            return
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }


    return (
        <ClientContainer>
            <Box>
                <Name>{name}</Name>
                <Email>{email}</Email>
                <CPF>{cpf}</CPF>
                <Date>{date}</Date>
                <Phone>{phone}</Phone>
            </Box>
            <Address>
                <p>{streetName}</p>
                <p>{houseNumber}</p>
                <p>{cityName}</p>
                <p>{stateName}</p>
                <p>{cep}</p>
            </Address>
            <Icons>
                <GrEdit color = "grey" size = {18} onClick = {() => alert("Atualização de cliente ainda não está implementada")}/>
                <BsTrash color = "red" size = {18} onClick = {removeClient}/>
            </Icons>
            
        </ClientContainer>
    )

}

export default function Clients() {

    const [clients, setClients] = useState([])
    const {config} = useContext(UserContext)
    const [callApi, setCallApi] = useState(true)

    const readClients = async () => {
        try {
            const result = (await getClients(config)).data
            setClients(result)
            
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }
    
    useEffect(async () => {
        if (callApi) {
            readClients()
            setCallApi(false)
        }
    }, [callApi])

    return (
        <Mold>
            <List>
                <Link to = {"/register-client"}>
                    <Registration>
                        <p>Cadastrar cliente</p>
                        <IoAddCircle color = "green" size = {20}/>
                    </Registration>
                </Link>
                {clients.map((value, index) => <Client key = {index} name = {value.name} email = {value.email} 
                cpf = {value.cpf} date = {value.date} phone = {value.phone} cep = {value.CEP} cityName = {value.cityName} 
                stateName = {value.stateName} houseNumber = {value.houseNumber} streetName = {value.streetName} 
                clientId = {value.id} config = {config} setCallApi = {setCallApi}/>)}
            </List>
        </Mold>
    )
}

const Registration = styled.div`
    margin: 60px 0;
    width: 12vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        color: grey;
    }

    && p:hover {
        filter: brightness(1.5);
    }
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    margin-bottom: 100px;
`
const ClientContainer = styled.div`
    margin-top: 10px;
    width: 900px;   
    min-height: 150px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    display: flex;  
    justify-content: space-between;
    align-items: top;
    padding: 20px;
    background-color: aliceblue;
`
const Name = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: grey;
    margin-bottom: 10px;
`
const Email = styled(Name)``
const CPF = styled(Email)``
const Date = styled(CPF)``
const Phone = styled(Date)``
const Address = styled.div`
    width: 54%;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        margin-bottom: 10px;
    }
`
const Box = styled.div`
    width: 38%;
`
const Icons = styled.div`
    width: 5%;
    cursor: pointer;
`