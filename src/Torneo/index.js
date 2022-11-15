import React from 'react';

import Torneos from '../Images/Torneo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Torneo() {
    return (
        <div>
            <img
            className='Torneo'
            src = {Torneos}
            alt="Torneo"
        />
        </div>
    )
}

