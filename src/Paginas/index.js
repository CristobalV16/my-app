import React from "react";
import { Routes , Route } from "react-router-dom";


import { Inicio } from "../Inicio";
import { Torneo } from "../Torneo"
import { Pc } from "../Pcs"

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/torneos" element={<Torneo/>}></Route>
                <Route path="/pc" element={<Pc/>}></Route>
            </Routes>
        </section>
    )
}
