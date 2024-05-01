import '../../styles/.index/Projetos.css'
import frog from '../../images/frog.webp'

const projetos = [
    {
        nomeProjeto: "Portfólio da Lay",
        imgProjeto: frog,
        urlProjeto: "/desafio-01",
    },
    {
        nomeProjeto: "Portfólio da Lay",
        imgProjeto: "",
        urlProjeto: "/desafio-02",
    },
    {
        nomeProjeto: "Portfólio da Lay",
        imgProjeto: frog,
        urlProjeto: "/desafio-01",
    },
    {
        nomeProjeto: "Portfólio da Lay",
        imgProjeto: "",
        urlProjeto: "/desafio-02",
    },
        {
        nomeProjeto: "Portfólio da Lay",
        imgProjeto: "",
        urlProjeto: "/desafio-02",
    },
]

export const Projetos = () => {

    return (
            <div className="projetos">
                {projetos.map((projetos, index) =>
                    <div className="itemProjeto" key={index}>
                        <img id="imgProjeto" width={320} src={projetos.imgProjeto} />
                        <span className="titleProjeto">{projetos.nomeProjeto}</span>
                        <button className="acessarProjeto">Acessar Projeto</button>
                    </div>
                )}
            </div>
    )
}