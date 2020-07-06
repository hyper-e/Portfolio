import React, { Component } from "react";
import "./CSS/cardStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import CrystalBall from "./images/crystalBallImg.png";
import Crystals from "./images/crystalImg.png";
import Gif from "./images/gifs.gif";
import Dice from "./images/dice.jpg";


class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = { image: [] }
    };
  
    componentDidMount() {
      this.handleGitLink();
    }
    handleGitLink = () => {
        // window.location.href = this.props.github
        // console.log(this.props.image)
        if (this.props.image === "CrystalBall") {
          this.setState({image: CrystalBall});
        };
        if (this.props.image === "Crystals") {
          this.setState({image: Crystals});
        };
        if (this.props.image === "Gifs") {
          this.setState({image: Gif});
        };
        if (this.props.image === "Dice") {
          this.setState({image: Dice});
        };
        // if (this.props.image === "Click") {
        //   this.setState({image: Click});
        // };
        // if (this.props.image === "Dog") {
        //   this.setState({image: Dog});
        // };
        // if (this.props.image === "Loop") {
        //   this.setState({image: Loop});
        // };
        // if (this.props.image === "Box") {
        //   this.setState({image: Box});
        // };
    };
    
    render() {
      const titleStyle = {
        color: "gold",
      };
     
        return(
            <div className="card">
      <div className="img-container">
        <img className="imageControl" src={this.state.image} alt={this.props.name} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong style={titleStyle}>Project:</strong> {this.props.name}
          </li>
          <li>
              <strong style={titleStyle}>Description:</strong> {this.props.description}
          </li>
          <li>
          <strong style={titleStyle}>Technologies:</strong> {this.props.technologies}
          </li>
          <li>
            <button className="herokuButton" onClick={(link) => {
                link = this.props.link
                window.open(link, "_blank");
            }}>Website Link</button>
          </li>
          <li>
           <button className="githubButton" onClick={(link) => {
               link = this.props.github
               window.open(link, "_blank");}} >
                   <FontAwesomeIcon icon={faGithub} size="2x"/></button>
          </li>
        </ul>
      </div>
    </div>

        );
    };
};

export default ProjectCard; 