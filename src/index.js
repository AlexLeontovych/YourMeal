import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {createBrowserRouter, Link, Route, RouterProvider} from "react-router-dom";
import Burgers from "./Components/Burgers/Burgers";
import Menu from "./Components/Menu/Menu";
import Snacks from "./Components/Snacks/Snacks";

const router = createBrowserRouter([
    {
        path: '/',
        element: (<>
            <Header/>
            <Navbar/>
            <Burgers/>
        </>),
    },
    {
        path: '/burgers',
        element: (<>
            <Header/>
            <Navbar/>
            <Burgers/>
        </>),
    },
    {
        path: '/snacks',
        element: (<>
            <Header/>
            <Navbar/>
            <Snacks/>
        </>),
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={router} />
    </>
);
