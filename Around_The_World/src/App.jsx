import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Country, ErrorPage, Home, Layout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":country",
        element: <Country />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
