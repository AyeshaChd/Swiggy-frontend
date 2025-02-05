import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructer");
  }
  componentDidMount() {
    // console.log(" parent mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div className="About">
        {/* <h1> About class component</h1> */}

        <UserClass />

        {/* <User name={"jea"} location={"US"} /> */}
      </div>
    );
  }
}

export default About;
