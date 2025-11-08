import { Login } from "./pages/Login"
import { Dashboard } from "./pages/Dashboard";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
