import logo from './logo.svg';
import './App.css';
import Home from '../src/Components/Home/Home'
import ProductCard from "./Components/Product/ProductCard";
import  {BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import AboutUs from "./Components/Core/AboutUs";
import NavBar from "./Components/Core/NavBar";
import SignIn from "./Components/Auth/SignIn";
import ProductPage from './Components/Product/ProductPage';
import Cart from './Components/Card/Cart';
import { createContext, useState ,useEffect } from "react";
export const appContext = createContext({});


function App() {
  //let card_array=[];
  //localStorage.setItem('product', card_array);

  return (
    <div className="App">

        <BrowserRouter>
            <NavBar/>
            <Routes>
             
            <Route path="/Home" element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path={"/signin"} element={<SignIn/>}></Route>
                <Route path=''element={<ProductPage/>}/>
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
