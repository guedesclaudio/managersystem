import styled from "styled-components"
import { BsTrash } from "react-icons/bs"
import { GrEdit } from "react-icons/gr"
import { IoAddCircle } from "react-icons/io5"
import { Link } from "react-router-dom"
import Mold from "./Mold"
import { Text } from "../styles/common.style"

function Order({name, email, cpf, date, phone, address}) {


    return (
        <OrderContainer>
            <Box>
                <Name>{name}</Name>
                <Email>{email}</Email>
                <ListProducts>
                    <Product>
                        <Text>Anel pedra rosa</Text>
                        <Text>Quantidade: <strong>1</strong></Text>
                    </Product>
                    <Product>
                        <Text>Anel pedra lua</Text>
                        <Text>Quantidade: <strong>2</strong></Text>
                    </Product>
                    <Product>
                        <Text>Anel pedra lua</Text>
                        <Text>Quantidade: <strong>2</strong></Text>
                    </Product>
                    <Product>
                        <Text>Anel pedra lua</Text>
                        <Text>Quantidade: <strong>2</strong></Text>
                    </Product>
                </ListProducts>
            </Box>
            <Address>
                <Text>{address.street}</Text>
                <Text>{address.number}</Text>
                <Text>{address.city}</Text>
                <Text>{address.state}</Text>
                <Text>{address.cep}</Text>
            </Address>
            <Total>
                <Text>Total: R$ <strong>227,00</strong></Text>
            </Total>
            <Icons>
                <GrEdit color = "grey" size = {18}/>
                <BsTrash color = "red" size = {18}/>
            </Icons>
            
        </OrderContainer>
    )

}

export default function Orders() {

    const orders = []

    return (
        <Mold>
            <List>
                <Link to = {"/register-order"}>
                    <Registration>
                        <Text>Cadastrar pedido</Text>
                        <IoAddCircle color = "green" size = {20}/>
                    </Registration>
                </Link>
                {orders.map((value, index) => <Order key = {index} name = {value.name} email = {value.email} 
                cpf = {value.cpf} date = {value.date} phone = {value.phone} address = {value.address}/>)}
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
        font-size: 16px;
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
        font-size: 16px;
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
        font-size: 16px;
    }
`