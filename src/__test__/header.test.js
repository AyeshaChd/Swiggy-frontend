import Header from "../components/Header";
import { render } from "@testing-library/react";
// import web_logo from "../utils/images/web_logo.png";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

it("should load Header Component with a login button", () => {
  <Provider store={appStore}>
    render(
    <Header />
    );
  </Provider>;
});
