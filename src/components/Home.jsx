import styled from "styled-components"

const StyleMain = styled.main `
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: justify;

    h1 {
        text-align: center;
        color: #df8634;
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        text-indent: 50px;
    }

    .intro {
        padding: 20px;
        background-color: #303030;
        margin-bottom: 20px;
        border-radius: 20px;
    }
`

function Home() {
    return(
        <>
            <StyleMain>
                <h1>Dota 2 Stats</h1>

                <p className="intro">Esse site foi criado com o objetivo de praticar a integração de APIs com o Front-end e também prover dados sobre o jogo Dota 2. Todos os dias, milhões de jogadores ao redor do mundo entram na batalha como um dos mais de 100 heróis de Dota em uma batalha entre equipes de cinco jogadores. Dota 2 é o jogo multijogador de ação e estratégia em tempo real mais profundo já feito, e há sempre uma nova estratégia ou tática a ser descoberta.</p>
                
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore rem voluptatum doloribus odio! Expedita assumenda maiores earum quod. Inventore quibusdam maxime magni doloremque, vitae aspernatur id ex praesentium! Deserunt?</span><span>Architecto mollitia accusamus commodi velit incidunt earum quam reprehenderit? Quae ratione, tempore dicta ab laboriosam eligendi optio suscipit, quis repellat officiis ipsam quibusdam vitae nobis quam, libero veniam nostrum esse!</span><span>Ipsum facere itaque, suscipit nesciunt odio, distinctio aperiam veritatis ducimus totam corrupti iste. Fugiat, quae eius. Dolor, provident. Quod at nobis explicabo, neque fugiat natus ipsam voluptate ad ea facilis!</span><span>Libero ipsum consequuntur pariatur velit, fuga illo amet excepturi suscipit cupiditate illum provident perferendis officia earum ab incidunt ad mollitia beatae ex, facilis rem cum, a aperiam! Officiis, consequatur ut!</span><span>Natus quis repudiandae aliquid odio velit iste ab ex quasi tempore nulla, ipsum vero labore, voluptatum doloribus incidunt, quod autem unde animi itaque minima illo ratione cum provident tempora. Quam.</span></p>

                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore rem voluptatum doloribus odio! Expedita assumenda maiores earum quod. Inventore quibusdam maxime magni doloremque, vitae aspernatur id ex praesentium! Deserunt?</span><span>Architecto mollitia accusamus commodi velit incidunt earum quam reprehenderit? Quae ratione, tempore dicta ab laboriosam eligendi optio suscipit, quis repellat officiis ipsam quibusdam vitae nobis quam, libero veniam nostrum esse!</span><span>Ipsum facere itaque, suscipit nesciunt odio, distinctio aperiam veritatis ducimus totam corrupti iste. Fugiat, quae eius. Dolor, provident. Quod at nobis explicabo, neque fugiat natus ipsam voluptate ad ea facilis!</span><span>Libero ipsum consequuntur pariatur velit, fuga illo amet excepturi suscipit cupiditate illum provident perferendis officia earum ab incidunt ad mollitia beatae ex, facilis rem cum, a aperiam! Officiis, consequatur ut!</span><span>Natus quis repudiandae aliquid odio velit iste ab ex quasi tempore nulla, ipsum vero labore, voluptatum doloribus incidunt, quod autem unde animi itaque minima illo ratione cum provident tempora. Quam.</span></p>

                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore rem voluptatum doloribus odio! Expedita assumenda maiores earum quod. Inventore quibusdam maxime magni doloremque, vitae aspernatur id ex praesentium! Deserunt?</span><span>Architecto mollitia accusamus commodi velit incidunt earum quam reprehenderit? Quae ratione, tempore dicta ab laboriosam eligendi optio suscipit, quis repellat officiis ipsam quibusdam vitae nobis quam, libero veniam nostrum esse!</span><span>Ipsum facere itaque, suscipit nesciunt odio, distinctio aperiam veritatis ducimus totam corrupti iste. Fugiat, quae eius. Dolor, provident. Quod at nobis explicabo, neque fugiat natus ipsam voluptate ad ea facilis!</span><span>Libero ipsum consequuntur pariatur velit, fuga illo amet excepturi suscipit cupiditate illum provident perferendis officia earum ab incidunt ad mollitia beatae ex, facilis rem cum, a aperiam! Officiis, consequatur ut!</span><span>Natus quis repudiandae aliquid odio velit iste ab ex quasi tempore nulla, ipsum vero labore, voluptatum doloribus incidunt, quod autem unde animi itaque minima illo ratione cum provident tempora. Quam.</span></p>
            </StyleMain>
        </>
    )
}

export default Home