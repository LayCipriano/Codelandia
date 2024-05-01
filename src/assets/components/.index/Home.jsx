import { Projetos } from "./Projetos.jsx"
import '../../styles/.index/Home.css'


export const Home = () => {
    return (
        <main className="mainIndex">
            <header className="headerProjetos">
                <h1>Desafios Codelândia</h1>

                <p>Selecione um projeto para visualizar</p>
            </header>

            <section>
                <Projetos />
            </section>
        </main>
    )
}