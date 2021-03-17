import React, { Component, useState } from "react";
import Links from "./Links";
import ProjectCard from "./ProjectCards";
import projects from "../projects.json";
import Nav from "./Nav";




class Portfolio extends Component {

    state = {
        projects
    };


    render() {
        return (

            <div id="portfolio2" className="portfolio">
                <div className="cards">
                    {this.state.projects.map(projects => (

                        <ProjectCard
                            id={projects.id}
                            key={projects.id}
                            name={projects.name}
                            image={projects.image}
                            description={projects.description}
                            technologies={projects.technologies}
                            github={projects.github_link}
                            link={projects.link}
                        />

                    ))}
                </div>
            </div>


        );
    };
};

function MobilePortfolio () {
    
    const [card, setCard] = useState(0);
    const cardDisplay = [];
    projects.map(project => (
        cardDisplay.push(
        <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            github={project.github_link}
            link={project.link}
        />
    )));
    
    const leftClick = () => {
        setCard(card - 1);
        console.log(card)
    };
    const rightClick = () => {
        setCard(card + 1);
    }
   
    const dispLayCard = () => {

    };

    return (
        <div id="portfolioCarousel">
            
            <div onClick={leftClick} style={{color: "white"}}>left</div>
            <div onClick={rightClick} style={{color: "white"}}>right</div>
        </div>
    );
};

export { Portfolio, MobilePortfolio };