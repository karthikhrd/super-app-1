import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/Register/index.jsx";
import HomePage from "./pages/Home/index.jsx";
import SelectCategoryPage, {
  loader as selectPageLoader,
} from "./pages/SelectCategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
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
