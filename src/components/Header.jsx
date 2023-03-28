import styled from "styled-components"
import { Link } from "react-router-dom"

const StyleHeader = styled.header `
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;

    h1 {
        padding-top: 20px;
        margin-bottom: 40px;
    }

    h1 span {
        color: #df8634;
    }

    ul {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
    }

    ul li a {
        font-size: 20px;
        font-weight: 700;
        display: block;
        text-decoration: none;
        color: #bbbbbb;
        transition: 250ms;
    }

    ul li a:hover {
        box-shadow: 0px 2px #fefefe;
        color: #fefefe;
        transition: 250ms;
    }
`

function Header() {
    return(
        <>
            <StyleHeader>
                <h1>Bem-vindo(a) ao <span>Dota 2 Stats</span></h1>

                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/heroes"}>Heroes</Link></li>
                        <li><Link to={"/sobre"}>Sobre</Link></li>
                    </ul>
                </nav>
            </StyleHeader>
        </>
    )
}

export default Header