import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummmylocation",
        avatar_url: "https:avater_url",
      },
      count: 0,
      count2: 2,
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AyeshaChd");
    const json = await data.json();
    console.log(json);

    this.timer = setInterval(() => {
      console.log("set interval");
    }, 1000);

    this.setState({
      userInfo: json,
      //   // count: this.state.count + 1,
      //   // count2: this.state.count2 + 1,
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.count != prevState.count) {
  //     console.log("count1");
  //   }
  //   if (this.state.count2 != prevState.count2) {
  //     console.log("count2");
  //   }
  // }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("clear interval");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;

    return (
      <div className="user-card mt-16 flex  justify-around  w-9/12  m-auto ">
        <img src={avatar_url} className="rounded-2xl" />
        <div className=" mt-20 font-bold">
          <h3>{name}</h3>
          <h4>{location}</h4>
          <h4>ayeshakanwal944@gmail.com</h4>
          {/* using react context */}
          <div>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h1 className="font-bold">{loggedInUser}</h1>
              )}
            </UserContext.Consumer>
          </div>
        </div>
      </div>
    );
  }
}
export default UserClass;
