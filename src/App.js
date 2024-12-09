import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Home from "./pages/home"
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}/>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

const Root = ()=>{
  return(
    <div>
      <Home/>
    </div>
  )
}

export default App;
