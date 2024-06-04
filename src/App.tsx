import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import ShopItemView from "./pages/ShopItemView/ShopItemView";
import SearchResultsView from "./pages/SearchResultsView/SearchResultsView";
import Checkout from "./pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "product/:id",
        element: <ShopItemView />,
      },
      {
        path: "search",
        element: <SearchResultsView />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
