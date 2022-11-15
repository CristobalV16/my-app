import React from "react";
import { Routes , Route } from "react-router-dom";


import { Inicio } from "../Inicio";
import { Torneo } from "../Torneo"
import { Pc } from "../Pcs"
import  Clientes  from "../Clientes";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/torneos" element={<Torneo/>}></Route>
                <Route path="/pc" element={<Pc/>}></Route>
                <Route path="/clientes" element={<Clientes/>}></Route>
            </Routes>
        </section>
    )
}
