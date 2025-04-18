import React from "react";
import ReactDOM from "react-dom/client";

import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Restaurent_menu from "./components/Restaurent_menu";
import AboutClass from "./components/AboutClass";

import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import Restaurent from "./components/Restaurent";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = ()=>
{
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet />
        </div>  
        </Provider>
        
    )
}

const appRouter = createBrowserRouter
(
    [
        {
            path:"/",
            element: <AppLayout />,
            children : [
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/contactus",
                    element:<Contact/>
                    
                },
                {
                    path:"/about",
                    element: <AboutClass name="Ajay" />
                },
                {
                    path:"/Restaurent",
                    element: <Restaurent />
                },
                {
                    path:"/restaurants/:resId",
                    element: <Restaurent_menu />
                },
                {
                    path:"/cart",
                    element: <Cart/>
                }
            ],
            errorElement : <Error />
        }
        

    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
