import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"
import { Link } from "react-router-dom"
import { IoAddCircle } from "react-icons/io5"

function Category() {

    return (
        <CategoryContainer>
            <Name>Anéis</Name>
            <Total>Quantidade: <strong>55</strong></Total>
        </CategoryContainer>
    )
}

export default function Categories() {

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
                <Category/>
                <Category/>
                <Category/>
                <Category/>
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