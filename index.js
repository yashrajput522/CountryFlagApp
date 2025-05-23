import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ParentComponent from "./Components/RoughWork";
import App from "./App";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import CountryDetail from "./Components/CountryDetail";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
   element: <App/>,
   errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:country",
        element: <CountryDetail/>,
      },  

      { 
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/Roughwork",
        element: <ParentComponent/>
      }
    
    ]
  }, 

  
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
 
    //<App />  
    <>
     <RouterProvider router={router}  /> 
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
