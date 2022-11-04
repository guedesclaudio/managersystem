import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"
import { BsTrash } from "react-icons/bs"
import { GrEdit } from "react-icons/gr"
import { IoAddCircle } from "react-icons/io5"
import { Link } from "react-router-dom"


function Order({name, email, cpf, date, phone, address}) {


    return (
        <OrderContainer>
            <Box>
                <Name>{name}</Name>
                <Email>{email}</Email>
                <ListProducts>
                    <Product>
                        <p>Anel pedra rosa</p>
                        <p>Quantidade: <strong>1</strong></p>
                    </Product>
                    <Product>
                        <p>Anel pedra lua</p>
                        <p>Quantidade: <strong>2</strong></p>
                    </Product>
                    <Product>
                        <p>Anel pedra lua</p>
                        <p>Quantidade: <strong>2</strong></p>
                    </Product>
                    <Product>
                        <p>Anel pedra lua</p>
                        <p>Quantidade: <strong>2</strong></p>
                    </Product>
                </ListProducts>
            </Box>
            <Address>
                <p>{address.street}</p>
                <p>{address.number}</p>
                <p>{address.city}</p>
                <p>{address.state}</p>
                <p>{address.cep}</p>
            </Address>
            <Total>
                <p>
                    Total: R$ <strong>227,00</strong>
                </p>
            </Total>
            <Icons>
                <GrEdit color = "grey" size = {18}/>
                <BsTrash color = "red" size = {18}/>
            </Icons>
            
        </OrderContainer>
    )

}

export default function Orders() {

    const orders = [
        {name: "Maria Clara Costa Vaz", email: "cvazmariaclara@gmail.com", cpf: "12345678900", date: "25/05/1989", phone: "21999570191", address: {
            street: "Rua Doutor Waldir Costa", number: "841", city: "Niterói", state: "Rio de Janeiro", cep: "24358190"
        }},
        {name: "Maria Clara Costa Vaz", email: "cvazmariaclara@gmail.com", cpf: "12345678900", date: "25/05/1989", phone: "21999570191", address: {
            street: "Rua Doutor Waldir Costa", number: "841", city: "Niterói", state: "Rio de Janeiro", cep: "24358190"
        }},
        {name: "Maria Clara Costa Vaz", email: "cvazmariaclara@gmail.com", cpf: "12345678900", date: "25/05/1989", phone: "21999570191", address: {
            street: "Rua Doutor Waldir Costa", number: "841", city: "Niterói", state: "Rio de Janeiro", cep: "24358190"
        }},
        {name: "Maria Clara Costa Vaz", email: "cvazmariaclara@gmail.com", cpf: "12345678900", date: "25/05/1989", phone: "21999570191", address: {
            street: "Rua Doutor Waldir Costa", number: "841", city: "Niterói", state: "Rio de Janeiro", cep: "24358190"
        }}
    ]

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <List>
                <Link to = {"/register-order"}>
                    <Registration>
                        <p>Cadastrar pedido</p>
                        <IoAddCircle color = "green" size = {20}/>
                    </Registration>
                </Link>
                {orders.map((value, index) => <Order key = {index} name = {value.name} email = {value.email} 
                cpf = {value.cpf} date = {value.date} phone = {value.phone} address = {value.address}/>)}
            </List>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 400px;
`
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
const OrderContainer = styled.div`
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
const Product = styled.div`
    display: flex;  
    justify-content: space-between;
    margin-bottom: 10px;
    

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
    }
`
const ListProducts = styled.div`
    border: 1px solid white;
    padding: 10px;
    border-radius: 6px;
    background-color: #ADD8E6;
    opacity: 0.7;
`
const Address = styled.div`
    width: 35%;

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
const Total = styled.div`
    display: flex;
    justify-content: space-between;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: green;
    }
`