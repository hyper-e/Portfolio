import React, { Component } from "react";
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

export default Portfolio;