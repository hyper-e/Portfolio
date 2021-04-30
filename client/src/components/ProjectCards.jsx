import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactThumb from "../images/reactPort (2).png";
import NodeStack from "../images/NoteStack.jpg";
import Liri from "../images/Liri.jpg";
import Dice from "../images/dice.jpg";
import Box from "../images/box.jpg";
import "../Css/cardStyle.css";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { image: [], links: false };
  }

  componentDidMount() {
    this.handleGitLink();
    this.missingLink();
  }
  handleGitLink = () => {
    // window.location.href = this.props.github
    // console.log(this.props.image)
    if (this.props.image === "NodeStack") {
      this.setState({ image: NodeStack });
    }
    if (this.props.image === "Liri") {
      this.setState({ image: Liri });
    }
    if (this.props.image === "Dice") {
      this.setState({ image: Dice });
    }
    if (this.props.image === "ReactThumbnail") {
      this.setState({image: ReactThumb})
    }
    if (this.props.image === "Box") {
      this.setState({image: Box})
    }
  };

  missingLink = () => {
    var link = this.props.link;
    if (link != undefined || link != null) {
      this.setState({ links: true });
    }
  };

  render() {
    const titleStyle = {
      color: "#222731",
    };

    return (
      <div className="card">
        <div className="img-container">
          <img
            className="imageControl"
            src={this.state.image}
            alt={this.props.imageCredit}
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong style={titleStyle}>Project:</strong> {this.props.name}
            </li>
            <li>
              <strong style={titleStyle}>Description:</strong>{" "}
              {this.props.description}
            </li>
            <li>
              <strong style={titleStyle}>Technologies:</strong>{" "}
              {this.props.technologies}
            </li>
            {this.state.links && (
              <li>
                <button
                  className="herokuButton"
                  onClick={(link) => {
                    link = this.props.link;
                    window.open(link, "_blank");
                  }}
                >
                  Website Link
                </button>
              </li>
            )}
            <li>
              <button
                className="githubButton"
                onClick={(link) => {
                  link = this.props.github;
                  window.open(link, "_blank");
                }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
