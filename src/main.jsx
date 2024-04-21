import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
// import Techcard from "./components/Techcard/Techcard.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* <Route path='techcard' element={<Techcard/>}/> */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
