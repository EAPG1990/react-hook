import { render, screen } from "@testing-library/react";
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { MainPage } from "../../src/09-useContext/MainPage";
import { Router } from "../../src/09-useContext/Router";
describe("Pruebas en el <MainPage />", () => {
  test("debe de mostrar el Homepage", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeTruthy();
  });
  test("debe de mostrar el LoginPage", () => {
    const router = createMemoryRouter(Router().routes, {
        initialEntries: ["/login"],
      });
    render(<RouterProvider router={router} />);
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
