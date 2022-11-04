import styled from "styled-components"
import SideBar from "../components/SideBar"
import BodyStyle from "./style"

export default function CreateCategory() {

    return (
        <Container>
            <BodyStyle/>
            <SideBar/>
            <CreateContainer>
                <Box>
                    <form>
                        <Inputs>
                            <input type = "text" placeholder = "nome da categoria"/>
                        </Inputs>
                        <Button>
                            <button type = "submit">Cadastar</button>
                            <p>Cadastre uma nova <strong>categoria</strong>!</p>
                        </Button>
                    </form>
                </Box>
            </CreateContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 400px;
`
const Inputs = styled.div`

`
const CreateContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 30vw;    
    height: 160px;
    border: 1px solid #ADD8E6;
    border-radius: 6px;
    margin-top: 100px;
    padding: 20px;

    
    && input {
        width: 300px;
        height: 40px;
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 6px;
        border: none;
        background-color: #ADD8E6;
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        outline: none;
    }

    && input::placeholder {
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
    }

    && .description {
        width: 540px;
    }

    && select {
        width: 150px;
        height: 40px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        outline: none;
        padding-left: 10px;
        background-color: #ADD8E6;
        border: none;
        border-radius: 6px;
        margin-right: 10px;
    }

    && button {
        width: 150px;
        height: 40px;
        border-radius: 6px;
        border: none;
        background-color: #ADD8E6;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: grey;
        cursor: pointer;
    }

    && button:hover {
        filter: brightness(0.8);
    }
`
const Button = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 60px;

    && p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: green;
        margin-left: 20px;
    }
`