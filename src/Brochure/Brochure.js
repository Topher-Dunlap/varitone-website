import React from 'react';
import Varitone_leaflet1 from '../Images/Varitone_leaflet1.jpg';
import Varitone_leaflet2 from '../Images/Varitone_leaflet2.jpg';
import Varitone1 from '../Images/Varitone1.jpg';


export default function Brochure(props) {
    return (
        <div>
            <h1>Brochure</h1>
            <img
                src={Varitone_leaflet1}
                alt="leaflet1"
                height={400}
                width={700} />
            <br/>
            <img
                src={Varitone_leaflet2}
                alt="leaflet2"
                height={400}
                width={700} />
            <br/>
            {/* <img
                src={Varitone1}
                alt="leaflet"
                height={200}
                width={200} /> */}
        </div>
    )
}