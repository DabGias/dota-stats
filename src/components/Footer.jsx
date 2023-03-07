import styled from "styled-components"

const StyleFooter = styled.footer `
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #df8634;
        margin-bottom: 40px;
    }

    p {
        color: #df8634;
        margin-bottom: 10px;
    }

    p span, p a {
        color: #fefefe;
        transition: 250ms;
    }

    p a:hover {
        box-shadow: 0px 2px #fefefe;
        transition: 250ms;
    }

    p a {
        text-decoration: none;
    }
`

function Footer() {
    return(
        <>
            <StyleFooter>
                <h1>Contato</h1>

                <p>E-mail: <span>gabrielfurlaneti@gmail.com</span></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/gabrielfurlaneti">https://www.linkedin.com/in/gabrielfurlaneti</a></p>
                <p>GitHub: <a href="https://github.com/DabGias">https://github.com/DabGias</a></p>
            </StyleFooter>
        </>
    )
}

export default Footer