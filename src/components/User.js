import { useState } from "react";
import { useEffect } from "react";
const User = ({ name, location }) => {
  const [count, setcount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("use Effect");
    setcount(2);
    setCount2(3);
    const timer = setInterval(() => {
      console.log("set interval in useEffect");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("interval in useEffect");
    };
  }),
    [];

  console.log("user");

  return (
    <div className="user-card border border-black mt-5">
      <h2>Count:{count}</h2>
      <h2>Count2:{count2}</h2>

      <h3>Name:{name}</h3>
      <h4>city:{location}</h4>
      <h4>ayeshakanwal@944gmail.com</h4>
    </div>
  );
};
export default User;
