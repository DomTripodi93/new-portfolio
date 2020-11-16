import React, { useContext, useEffect } from 'react';

import sAndD from "../../assets/procmgmt.png";
import sAndD1 from "../../assets/procmgmt1.png";
import sAndD2 from "../../assets/procmgmt2.png";
import sAndD3 from "../../assets/procmgmt3.png";
import sAndD4 from "../../assets/procmgmt4.png";
import sAndD5 from "../../assets/procmgmt5.png";
import sAndD6 from "../../assets/procmgmt6.png";
import myProdStatus from "../../assets/prodscreen.png";
import myProdStatus1 from "../../assets/prodscreen1.png";
import myProdStatus2 from "../../assets/prodscreen2.png";
import myProdStatus3 from "../../assets/prodscreen3.png";
import myProdStatus4 from "../../assets/prodscreen4.png";
import myProdStatus5 from "../../assets/prodscreen5.png";
import myProdStatus6 from "../../assets/prodscreen6.png";
import carolines from "../../assets/carolines.png";
import carolines1 from "../../assets/carolines1.png";
import carolines2 from "../../assets/carolines2.png";
import carolines3 from "../../assets/carolines3.png";
import Sample from '../../components/samples/sample.component';

import "./sample.styles.scss";
import { HeaderContext } from '../../App';

const Samples = props => {
    const setHeader = useContext(HeaderContext);

    useEffect(()=>{
        if (!props.home){
            setHeader(false);
        }
    },[setHeader, props])

    const samples = [
        {
            img: sAndD,
            images: [
                {image: sAndD1, desc: "Objectives of each department"},
                {image: sAndD4, desc: "Steps of each objective"},
                {image: sAndD2, desc: "Best practices and common difficulties of each step"},
                {image: sAndD3, desc: "Mobile View: Best practices and common difficulties of each step"},
                {image: sAndD5, desc: "Employee scheduling"},
                {image: sAndD6, desc: "Mobile View: Employee scheduling"}
            ],
            title: "Schedule and Direction",
            description: [
            "A Node/Express and React/Redux application with user hierarchy to allow a \"root\" user to manage employees, \"admin\" to manage tasks, instructions and scheduling, and \"employee\" to view tasks and mark them as started or complete"
            ],
            appLink: "https://scheduleanddirection.web.app/",
            codeLink: "https://github.com/DomTripodi93/process-node"
        },
        {
            img: myProdStatus,
            images: [
                {image: myProdStatus1, desc: "Dashboard of current running jobs"},
                {image: myProdStatus2, desc: "Mobile View: Dashboard of current running jobs"},
                {image: myProdStatus3, desc: "Mill production status by part and machine"},
                {image: myProdStatus4, desc: "Mobile View: Mill production status by part and machine"},
                {image: myProdStatus5, desc: "Lathe production status by machine and date"},
                {image: myProdStatus6, desc: "Mobile View: Lathe production status by machine and date"},
            ],
            title: "My Production Status",
            description: [
            "My Production Status V0.9 built with .NET Core 3.1 and Angular 8. Used by me to save 4+ hours every week as a CNC production manager."
            ],
            appLink: "https://MyProductionStatus.com",
            codeLink: "https://github.com/DomTripodi93/production-dot-net"
        },
        {
            img: carolines,
            images: [
                {image: carolines1, desc: "Scroll through virtual tours"},
                {image: carolines2, desc: "Scroll through virtual tours"},
                {image: carolines3, desc: "Scroll through virtual tours"}
            ],
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
            <h1 id="Samples">My Projects:</h1>
            <br/>
            {samples.map(sample=>(
                <Sample 
                    sample={sample}
                    key={sample.title}/>
            ))}
        </div>
    )
}

export default Samples;