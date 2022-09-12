import React, { Component, useState } from "react";
import ProjectCard from "./ProjectCards";
import projects from "../projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";



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
      const len =  cardDisplay.length - 1;
       if (card === 0 ){
           setCard(len)
       } else {
           setCard(card - 1)
        }
        // setCard(card - 1);
        // console.log(card)
    };
    const rightClick = () => {
        const len =  cardDisplay.length - 1;
        //setCard(card + 1);
        if (card >= len) {
            setCard(0)
        } else {
            setCard(card + 1);
        }
    }
  
    return (
        <div id="portfolioCarousel" name="portfolioCarousel">
              {cardDisplay[card]}
              <div className="portfolioLR">
              <div onClick={leftClick} style={{color: "white"}}><FontAwesomeIcon icon={faChevronCircleLeft} size="3x" /></div>
            <div onClick={rightClick} style={{color: "white"}}><FontAwesomeIcon icon={faChevronCircleRight} size="3x" /></div>
              </div>
        </div>
    );
};

export { Portfolio, MobilePortfolio };