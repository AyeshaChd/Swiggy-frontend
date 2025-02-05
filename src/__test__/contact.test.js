import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
/* writing test cases for UI testing of Contact component ,whether it is renderd properly or not .
 following test cases -- finding different parts (heading ,button,placeholder). true answers of testcases proves that component has been rendered properly bcz these
 parts has been found ,means they exist .*/

describe("Contact us page test case", () => {
  it("should load contact us component", () => {
    // Before testing UI of the component ,we must have to render it on js-dom through render method.
    render(<Contact />);
    // Querying----finding heading
    const heading = screen.getByRole("heading");
    // assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    // assertion
    expect(button).toBeInTheDocument();
  });
  it("should load input inside contact component", () => {
    render(<Contact />);
    // quering
    const input = screen.getByPlaceholderText("Name");
    // assertion
    expect(input).toBeInTheDocument();
  });

  it("should load  all input boxes on the  contact component", () => {
    render(<Contact />);
    // quering
    const inputBoxes = screen.getAllByRole("textbox");

    // assertion
    expect(inputBoxes.length).toBe(2);
  });
});
