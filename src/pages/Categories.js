import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"
import { Link } from "react-router-dom"
import { IoAddCircle } from "react-icons/io5"
import { useContext, useEffect, useState } from "react"
import { getCategories } from "../services/api"
import { UserContext } from "../contexts/UserContext"

function Category({name, numberProducts}) {

    return (
        <CategoryContainer>
            <Name>{name}</Name>
            <Total>Quantidade: <strong>{numberProducts}</strong></Total>
        </CategoryContainer>
    )
}

export default function Categories() {

    const [categoriesData, setCategoriesData] = useState([])
    const {config} = useContext(UserContext)

    useEffect(async () => {
        try {
            const result =  (await getCategories(config)).data
            setCategoriesData(result)
            
        } catch (error) {
            alert(`Ocorreu um erro ${error}`)
        }
    }, [])

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <List>
                <Link to = {"/register-category"}>
                    <Registration>
                        <p>Cadastrar categoria</p>
                        <IoAddCircle color = "green" size = {20}/>
                    </Registration>
                </Link>
                {categoriesData.map((value, index) => <Category key = {index} 
                name = {value.name} numberProducts = {value.number_products}/>)}
            </List>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 400px;
`
const List = styled.div`
    margin-top: 0px;
`
const CategoryContainer = styled.div`
    width: 500px;
    border-radius: 6px;
    background-color: aliceblue;
    height: 40px;
    border: 1px solid #ADD8E6;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
`
const Name = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: grey;
`
const Total = styled(Name)`
    font-size: 18px;
`
const Registration = styled.div`
    margin: 60px auto;
    width: 14vw;
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