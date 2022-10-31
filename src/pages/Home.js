import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"
import HomeBox from "../components/HomeBox";


export default function Home() {

    const boxes = [
        {name: "Produtos", description: "Crie, consulte, exclua e atualize os seus produtos"},
        {name: "Pedidos", description: "Acompanhe e atualize os seus pedidos"},
        {name: "Clientes", description: "Adicione, consulte, exclua e atualize clientes"},
        {name: "Manager System", description: ""},
    ]

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <Boxes>
                <WelcomeMessage>Olá, bem vindo <strong>Arte Natu!</strong></WelcomeMessage>
                <img src = "https://img.freepik.com/vetores-gratis/adesivo-caixa-vazia-aberta-em-fundo-branco_1308-68243.jpg?w=2000"/>
                <BoxTemplate>
                    {boxes.map((value, index) => <HomeBox key = {index} name = {value.name} description = {value.description}/>)}
                </BoxTemplate>
            </Boxes>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: left;
`
const Boxes = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

    && img {
        width: 200px;
        margin-top: 100px;
    }
`
const WelcomeMessage = styled.h1`
    margin-top: 100px;
    color: grey;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 400;
`
const BoxTemplate = styled.div`
    margin-top: 100px;
    width: 810px;
    height: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    && :hover {
        opacity: 1.0;
    }
`
