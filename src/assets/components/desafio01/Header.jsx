import React from "react";
import { GoSearch } from "react-icons/go";
import '../../styles/desafio01/D1-header.css';

export const Header = () => {
    return (
        <header className="headerD1">
            <div className="content">

                <div className='logo'>
                    <p className='codeland'>Codelândia</p>
                    <p className='blog'>blog</p>
                </div>

                <div className="pesquisa">
                    <span htmlFor="search" >
                        <GoSearch/>
                    </span>
                    <input type="text" name='search' placeholder='Pesquisar no blog' />
                </div>
                
            </div>
        </header>
    )
}