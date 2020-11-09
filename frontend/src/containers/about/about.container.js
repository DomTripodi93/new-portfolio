import React, { useEffect } from 'react';
import ctfl from "../../assets/ctfl.jpg";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import angularIcon from "../../assets/angular.png" ;
import dotNet from "../../assets/dotnet.png";
import psm from "../../assets/PSM1.jpg";

import "./about.styles.scss";

const About = props => {

    useEffect(()=>{
        if(props.callback){
            props.callback();
        }
    })

    return (
    <div className='centered'>
        <div className="sample-banner">
            <h2>
                About Me
            </h2>
        </div>
        <div className="size-holder-desc middle">
            <div>
                <h4>
                    <strong>
                        I love engineering custom logic to solve real world issues, and seeing the value
                        my programs provide come to life to improve productivity. I work as a contractor on a variety of projects
                        mainly using .NET Framework, .NET Core, MS SQL Server, and Angular.
                    </strong>
                </h4>
            <div className="img-float-left">
                <img src={reactIcon} className="icon-sized" alt="React Logo" />
            </div>
            <h4>
                <strong>
                    One of my favorite project was a scheduling and employee training/management application built with MERN stack, and deployed to AWS. 
                </strong>
            </h4>
            <h4>
                <strong>
                    With user hierarchy the root user can add an manage employees and set administrative access. An administrative user can update 
                    departments, objectives, best practices, and set up employee schedules.
                </strong>
            </h4>
            <div className="img-float-right">
                <img src={nodeIcon} className="icon-sized" alt="Node Core Logo" />
            </div>
            <h4>
                <strong>
                    The employee user can view their schedule, which features listings of the steps to complete an assigned objective, and the ability
                    to change the status of the scheduled task to read, or complete, and acklowledging their commitment to follow the best practices
                    listed within each step of the objective.
                </strong>
            </h4>
            <h4>
                <strong>
                    Another one of my bigger projects, My Production Status built with .NET Core and Angular, deployed to Azure, 
                    was very useful to me in my most former position as a Production Control Manager in Aerospace Manufacturing. 
                </strong>
            </h4>
            <div className="img-float-left">
                <img src={angularIcon} className="icon-sized" alt="Angular Logo" />
            </div>
            <h4>
                <strong>
                    By automating repetitive mathematical tasks, and storing production data with analytics,
                    I was able to save an average of 4-5 hours a week, and gain insight about problem areas in
                    the production process that would require further investigation.
                    <div className="img-float-right">
                        <img src={dotNet} className="icon-sized" alt=".Net Core Logo" />
                    </div>
                </strong>
            </h4>
            <h4>
                <strong>
                    Towards the end of 2018, I decided to take some time to focus on Agile, ISTQB Testing Standards and Scrum, 
                    and earned my PSM1 Professional Scrum Master Certification in February of 2019, and ISTQB CTFL 
                    Certified Tester Foundation Level Certification in March of 2019.
                </strong>
            </h4>
            <h4>
                <strong>
                    In 2020, I got a lot deeper into Database Administration, and the value of stored procedures
                    and automated sql data loading with SQL Agent Jobs. While working as a contractor, I have also learned
                    a lot about maintaining production applications running in IIS, and Data Reporting with Power BI.
                </strong>
            </h4>
            </div>
            <br />
            <div className="grid50-to-100">
                <div className="middle">
                    <img className="img-holder-cert" src={psm} alt="PSM1 Certification" />
                    <h5>Scrum.org Professional Scrum Master I</h5>
                </div>
                <div className="middle">
                    <img className="img-holder-cert" src={ctfl} alt="CTFL Certification" />
                    <h5>ISTQB Certified Tester Foundation Level</h5>
                </div>
            </div>
            <h5>
                If your company or client would like to profit from data management or reporting solutions
                send me an email: <strong>DTripodi93@gmail.com</strong> 
            </h5>
            <h5>
                With an understanding of API, Database and SPA development, I'm always learning more and working with new technologies.
            </h5>
        </div>
    </div>
    )
}

export default About;