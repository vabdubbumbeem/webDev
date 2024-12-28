import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import classes from "./App.module.css"

import About from './pages/About';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Form from './pages/Form';
import Reviews from './pages/Reviews';
import PageBottom from './components/PageBottom';



function App() {
  return (
    <>
      <PageHeader />
      <div className={classes.App}>
      <Routes>
        <Route path="/" element={<About />}>
        </Route>
        <Route path="/contacts" element={<Contacts />}>
        </Route>
        <Route path="/products" element={<Products />}>
        </Route>
        <Route path="/reviews" element={<Reviews />}>
        </Route>
        <Route path="/form" element={<Form />}>
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
