import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="Error">
      <h1>Opps!!!</h1>
      <h1>Something went Wrong</h1>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};
export default Error;
