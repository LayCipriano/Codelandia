import React, { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import '../../styles/D1-content.css'

const posts = [{
    dtPublicacao: '30 de dez, 2023',
    tituloPost: 'Agora é oficial: o Windows 11 está vindo',
    descricaoPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
},
{
    dtPublicacao: '01 de mar, 2024',
    tituloPost: 'Tim Berners-Lee vai leiloar código-fonte da web',
    descricaoPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.'
},
{
    dtPublicacao: '18 de abr, 2024',
    tituloPost: 'Tem Firefox novo no pedaço e você vai querer migrar',
    descricaoPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac.'
},
{
    dtPublicacao: '01 de mai, 2024',
    tituloPost: 'John MCAfee, criador do antivírus McAfee, morre',
    descricaoPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.'
}
]

export const Posts = () => {

    const [favorite, setFavorite] = useState([]);

    const toggleFavorite = (index) => {
        const updateFavorite = [...favorite];
        if(updateFavorite.includes(index)) {
            updateFavorite.splice(updateFavorite.indexOf(index), 1);
        } else {
            updateFavorite.push(index);
        }
        setFavorite(updateFavorite);
    }

    return (
        <>
            {posts.map((posts, index) => (
                <article key={index}>
                    <div className="cabecalhoArticle">
                        <div className="date">
                            <p>{posts.dtPublicacao}</p>
                        </div>

                        <div className="fav" onClick={() => toggleFavorite(index)}>
                            {favorite.includes(index) ? (<MdFavorite color="rgba(87, 74, 232, 1)" />) : (<MdFavoriteBorder color="rgba(87, 74, 232, 1)" />)}
                            
                        </div>
                    </div>
                    <div className="title">
                        <p id="title">{posts.tituloPost}</p>
                    </div>

                    <div className="describe">
                        <p>{posts.descricaoPost}</p>
                    </div>
                </article>
            ))}
        </>
    )
}