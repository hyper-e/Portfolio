import React, { Component } from "react";
import "./CSS/cardStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import images from "./images/crystalball.png";
class ProjectCard extends Component {
    // constructor(props) {
    //     super(props);
    // };
    // handleGitLink = () => {
    //     // window.location.href = this.props.github
    //     import image from (this.props.image);
    // };
  
    render() {
    
     
        return(
            <div className="card">
      <div className="img-container">
        <img src="" alt={this.props.name} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {this.props.name}
          </li>
          <li>
              <strong>Description:</strong> {this.props.description}
          </li>
          <li>
            <button onClick={(link) => {
                link = this.props.heroku_link
                window.location.href = link
            }}>Heroku Link</button>
          </li>
          <li>
           <button onClick={(link) => {
               link = this.props.github
               window.location.href = link}} >
                   <FontAwesomeIcon icon={faGithub} size="2x"/></button>
          </li>
        </ul>
      </div>
    </div>

        );
    };
};

export default ProjectCard; 