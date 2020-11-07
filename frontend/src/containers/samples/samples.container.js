import React from 'react';

import sAndD from "../../assets/procmgmt.png";
import myProdStatus from "../../assets/prodscreen.png";
import carolines from "../../assets/carolines.png";
import Sample from '../../components/sample.component';

import "./sample.styles.scss";

const Samples = props => {
    const samples = [
        {
            img: sAndD,
            title: "Schedule and Direction",
            description: [
            "A Node/Express and React/Redux application with user hierarchy to allow a \"root\" user to manage employees, \"admin\" to manage tasks, instructions and scheduling, and \"employee\" to view tasks and mark them as started or complete"
            ],
            appLink: "https://scheduleanddirection.web.app/",
            codeLink: "https://github.com/DomTripodi93/process-node"
        },
        {
            img: myProdStatus,
            title: "My Production Status",
            description: [
            "My Production Status V0.9 built with .NET Core 3.1 and Angular 8. Used by me to save 4+ hours every week as a CNC production manager."
            ],
            appLink: "https://MyProductionStatus.com",
            codeLink: "https://github.com/DomTripodi93/production-dot-net"
        },
        {
            img: carolines,
            title: "Caroline's Crystals",
            description: [
                "A static marketing site designed to give a beautiful virtual tour to potential customers. Optimized for PC, Tablet or Mobile."
            ],
            appLink: "https://carolinescrystals.com/",
            codeLink: "https://github.com/DomTripodi93/carolines"
        }
    ]


    return (
        <div className='centered'>
            {samples.map(sample=>(
                <Sample 
                    sample={sample}/>
            ))}
        </div>
    )
}

export default Samples;