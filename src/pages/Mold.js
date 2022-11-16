import styled from "styled-components";
import SideBar from "../components/SideBar"
import BodyStyle from "./style"

export default function Mold({children}) {
    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 400px;
`