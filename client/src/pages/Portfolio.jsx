import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import ProjectCard from "../components/ProjectCards";
import projects from "../projects.json";
import Nav from "../components/Nav";
class Portfolio extends Component {

    state = {
        projects
    };

    render() {
        return (

            <div className="portfolio">
                <div className="navBarFix"><Nav /></div>
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
                <Links linkBox="port2Links" />
            </div>


        );
    };
};

export default Portfolio;