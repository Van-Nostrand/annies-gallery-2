import React, {Component} from "react";

class NavbarNavlink extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors: [
        "rgba(228, 199, 79, 1)",
        "rgba(82, 199, 71, 1)",
        "rgba(226, 94, 19, 1)",
        "rgba(181, 70, 212, 1)",
        "rgba(64, 72, 233, 1)",
        "rgba(146, 173, 106, 1)",
        "rgba(254, 42, 42, 1)",
        "rgba(8, 104, 119, 1)",
        "rgba(66, 158, 0, 1)",
        "rgba(76, 9, 193, 1)"
      ],
      hidden: true
    }
  }

  render(){
    return (
      <div
      className="nav-link"
      id={`nav-link-${this.props.iteration}`}
      onMouseOver={this.props.mouseEntersLink}
      onMouseMove={this.props.handleMouseMove}
      onMouseOut={this.props.handleMouseOut}
      onClick={this.props.handleClick}
       >
      {this.props.linkdata.title}
      </div>
    );
  }
};

export default NavbarNavlink;
