// import Navbar from "./Component/Navbar";
import React from "react";
// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Home from './Component/Home'
// import Login from "./Component/Login";
// import Form from "./Component/Registration";
// import Veggie from "./Component/Veggie";
//import Album from "./Component/Veggie";
import Veges from "./Component/Veg";
import Bill from "./Component/Billing";
import Chocolates from "./Component/Chocolates";
import Veggie from "./Component/Veggie";
import Juice from "./Component/juice";
import Kitchen from "./Component/kitchen";
import Login from "./Component/Login";
import RegistrationForm from "./Component/Registration";
export default function App(){
  return(
    // <BrowserRouter>
    //     <Routes>
    //       <Route exact path="/" element={<Home/>}/>
    //       <Route exact path="/home" element={<Home/>}/>
    //       <Route exact path="/login" element={<Login/>}/>
    //       <Route exact path="/register" element={<Form/>}/>
    //       <Route exact path="*" element={<div>404 NOT FOUND</div>}/>
    //     </Routes>
    // </BrowserRouter>
    // <Album/>
      // <Veges />
    //  <Veggie/>
    // <Juice/>
     <Kitchen/>
    // <Login/>
    // <Bill/>
    //<Navbar/>
    // <Chocolates/>
    // <RegistrationForm/>
  
  )
}