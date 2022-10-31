import styled from "styled-components"
import { FcOpenedFolder } from "react-icons/fc"
import { FiLogOut } from "react-icons/fi"
import { IoAddCircle } from "react-icons/io5"
import { AiFillEye } from "react-icons/ai"

export default function SideBar() {

    

    return (
        <Container>
            <LogoTemplate>
                <Logo>Manager System</Logo>
                <FcOpenedFolder size = {30}/>
            </LogoTemplate>
            <Topic className = "first">
                <Title>Produtos</Title>
                <Sub>
                    Ver produtos
                    <AiFillEye size = {24}/>
                </Sub>
                <Sub>
                    Cadastrar produto
                    <IoAddCircle size = {24}/>
                </Sub>
            </Topic>
            <Topic>
                <Title>Pedidos</Title>
                <Sub>
                    Ver pedidos
                    <AiFillEye size = {24}/>
                </Sub>
                <Sub>
                    Criar pedido
                    <IoAddCircle size = {24}/>
                </Sub>
            </Topic>
            <Topic>
                <Title>Clientes</Title>
                <Sub>
                    Ver Clientes
                    <AiFillEye size = {24}/>
                </Sub>
                <Sub>
                    Cadastrar cliente
                    <IoAddCircle size = {24}/>
                </Sub>
            </Topic>
            <Exit>
                <FiLogOut color = "orange" size = {30}/>
            </Exit>
        </Container>
    )
}

const Container = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #ADD8E6;
    box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );

    && .first {
        border-top: 1px solid white;
    }
`
const LogoTemplate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 50px;
`
const Logo = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: white;
`
const Topic = styled.div`
    border-bottom: 1px solid white;
    padding: 20px;
`
const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
`
const Sub = styled(Title)`
    margin-left: 10px;
    margin-top: 10px;
    font-weight: 400;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    
    cursor: pointer;
    opacity: 0.7;

    &&:hover {
        filter: brightness(0.6);
    }
`
const Exit = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;
    cursor: pointer;
`