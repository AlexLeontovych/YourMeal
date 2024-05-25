import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import Header from "./Components/Header/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header/>
        <App />
    </>
);
