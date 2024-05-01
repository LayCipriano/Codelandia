import { Routes, Route } from "react-router-dom"
import { Desafio01 } from "../desafio01/Desafio01.jsx"
import { Home } from "./Home.jsx";

export const Routa = () => {
    return (
        <Routes>
            <Route path="/" element={<Desafio01/>}/>
            <Route path="/desafio-01" element={<Home/>}/>
        </Routes>
    );
}




