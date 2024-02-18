import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home, {loader as homeLoader} from "./pages/Home/Home"


const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
