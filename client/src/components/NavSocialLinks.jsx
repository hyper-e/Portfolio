import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class NavSocialLinks extends Component {
    handleGitHubclick = () => {
        window.open("https://github.com/Eddie-Reta", "_blank");
    };
    handleLinkedInclick = () => {
        window.open("https://www.linkedin.com/in/eduardo-reta-936130181/", "_blank");
    }

    render() {
      return (  <div className= {this.props.NSL}>
        <FontAwesomeIcon onClick={this.handleGitHubclick} className={this.props.iconStyle}  icon={faGithubAlt} size="3x" />
        <FontAwesomeIcon onClick={this.handleLinkedInclick}  className={this.props.iconStyle} icon={faLinkedin} size="3x" />
        </div>
      );
    };
};

export default NavSocialLinks;