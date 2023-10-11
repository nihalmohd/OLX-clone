import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './store/firebaseContext'
import {firebaseContext} from "./store/firebaseContext"
import {auth, db,storage} from './firebase/config';
import React from 'react';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   
       <firebaseContext.Provider value={{db,auth,storage}}>
        <Context>
         <App />

        </Context>
       </firebaseContext.Provider>
  </React.StrictMode>
);


