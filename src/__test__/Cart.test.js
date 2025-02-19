import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockRestaurantMenuData.json";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);
it("Should render Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("ROLLS(15)");
  fireEvent.click(accordionHeader);

  // "fooditems" is the testid given to the Itemlist  Component diV.
  expect(screen.getAllByTestId("foodItems").length).toBe(15);
  expect(screen.getByText("Cart-(0)items")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart-(1)items")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart-(2)items")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(17);
  fireEvent.click(screen.getByText("Empty Cart"));
  expect(screen.getAllByTestId("foodItems").length).toBe(15);
  expect(
    screen.getByText("Cart is empty.Add some items to the cart.")
  ).toBeInTheDocument();
});
