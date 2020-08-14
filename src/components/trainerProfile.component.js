
import React, {Component} from 'react';
import Navbar from "./navbar.component";
import Header from "./header.component";
import Footer from "./footer.component.js";



export default class TrainerProfile extends Component{
  
    render(){
return(
    <div>
    <Navbar/>
    <Header/>
    <div>
        <h1>This is the TrainerProfile page</h1>
    </div>
    <Footer/>
    </div>
);
}
}   