import styled from "styled-components"

export default function SideBar() {

    const boxes = [
        {name: "Produtos", description: "Crie, consulte, exclua e atualize os seus produtos"},
        {name: "Pedidos", description: "Acompanhe e atualize os seus pedidos"},
        {name: "Clientes", description: "Adicione, consulte, exclua e atualize clientes"},
    ]

    return (
        <Container>
            <Boxes>
                {boxes.map((value, index) => <Box key = {index} name = {value.name} description = {value.description}/>)}
            </Boxes>
        </Container>
    )
}

const Container = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #ADD8E6;
    box-shadow: 0 8px 12px 0 rgba( 31, 38, 135, 0.37 );
`
const Boxes = styled.div`

`
const Box = styled.div``