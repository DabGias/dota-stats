import styled from "styled-components"

const StyleMain = styled.main `
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 span {
        color: #df8634;
    }
`

function Sobre() {
    return(
        <>
            <StyleMain>
                <h1>Autor: <span>Gabriel Furlaneti Dias</span></h1>
            </StyleMain>
        </>
    )
}

export default Sobre