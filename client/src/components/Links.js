import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Links extends Component {

    handleGitHubclick = () => {
        window.location.href = "https://github.com/hyper-e";
    };
    handleLinkedInclick = () => {
        window.location.href = "https://www.linkedin.com/in/eduardo-reta-936130181/"
    }

    render() {
        return(
            <div className={this.props.linkBox}>
<FontAwesomeIcon onClick={this.handleGitHubclick} id={this.props.gitID} className="icons" icon={faGithubAlt} size="4x" />
<FontAwesomeIcon onClick={this.handleLinkedInclick} id={this.props.linkedID} className="icons" icon={faLinkedin} size="4x" />
</div>
        );
    };
};

export default Links;