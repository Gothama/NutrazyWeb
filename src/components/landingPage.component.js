
import React, {Component} from 'react';
import Navbar from "./navbar.component";
import Header from "./header.component";
import Footer from "./footer.component.js";
import AllBlog from "./allBlog.component.js"

export default class LandingPage extends Component{
  
    render(){
return(
    <div>
    <Navbar/>
    <Header/>
    <AllBlog/>
    <Footer/>
    </div>
);
}
} 