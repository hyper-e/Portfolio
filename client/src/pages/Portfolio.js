import React, { Component } from "react";
import "./Css/page.css";
import Links from "../components/Links";
import ProjectCard from "../components/ProjectCards";
import projects from "../projects.json";
class Portfolio extends Component {

    state = {
        projects
      };
    
    render() {
        return(
           
    <div className="portfolio">
        <div className="cards">
        {this.state.projects.map(projects => (  
           
            <ProjectCard
                id={projects.id}
                key={projects.id}
                name={projects.name}
                image={projects.image}
                description={projects.description}
                github={projects.github_link}
                heroku={projects.heroku}
            />
            
  ))}
  </div>
        <Links linkBox="port2Links" />
</div>
            
            
        );
    };
};

export default Portfolio;