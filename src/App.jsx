import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/Register/index.jsx";
import HomePage from "./pages/Home/index.element.jsx";
import SelectCategoryPage from "./pages/SelectCategory/index.element";
import { loader as selectPageLoader } from "./pages/SelectCategory/index.loader";
import { loader as homePageLoader } from "./pages/Home/index.loader";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "select-category",
        element: <SelectCategoryPage />,
        loader: selectPageLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
