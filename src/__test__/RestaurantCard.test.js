import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom";

it("should render the restaurant card component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
