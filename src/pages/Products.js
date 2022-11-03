import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"
import { BsTrash } from "react-icons/bs"
import { GrEdit } from "react-icons/gr"
import { IoAddCircle } from "react-icons/io5"
import { Link } from "react-router-dom"



function Product({name, description, price, category}) {

    return (
        <ProductContainer>
            <Name>
                {name}
                <Icons>
                    <GrEdit color = "grey" size = {18}/>
                    <BsTrash color = "red" size = {18}/>
                </Icons>
            </Name>
            <Description>{description}</Description>
            <Box>
                <Price>R$ {price}</Price>
                <Category>{category}</Category>
            </Box>
        </ProductContainer>
    )

}

export default function Products() {

    const products = [{name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"},
    {name: "Anel pedra rosa", description: "Anel feito em prata 950 + pedra rosa", price: 30, category: "Anéis"}]

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <ListContainer>
                <Link to = {"/create-product"}>
                    <Registration>
                        <p>Cadastrar produto</p>
                        <IoAddCircle color = "green" size = {20}/>
                    </Registration>
                </Link>
                <List>
                    {products.map((value, index) => <Product key = {index} name = {value.name} 
                    description = {value.description} price = {value.price} category = {value.category}/>)}
                </List>
            </ListContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: left;
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
const ListContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`
const List = styled.div`
    width: 50vw;
    margin-top: 20px;
    margin-bottom: 100px;
`
const ProductContainer = styled.div`
    width: 100%;   
    min-height: 140px;  
    border: 1px solid white;
    border-radius: 6px;
    padding: 10px;
    background-color: aliceblue;
    margin-bottom: 10px;
`
const Name = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Description = styled(Name)`
    margin-top: 10px;
    font-size: 20px;
    font-style: italic;
`
const Price = styled(Name)`
    font-size: 20px;
    margin-top: 40px;
    color: orange;
`
const Icons = styled.div`
    cursor: pointer;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Category = styled(Description)`
    margin-top: 40px;
`