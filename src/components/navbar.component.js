
import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import image from "../assets/images/features-first-icon.png"

import $ from 'jquery';

export default class Navbar extends Component{
  
  componentDidMount() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();
  
        if (scroll >= box - header) {
          $("header").addClass("background-header");
        } else {
          $("header").removeClass("background-header");
        }
      });
      
    }
    
    render(){
return(
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav ">
                   
                        <a href="index.html" className="logo "><img id="k"style={{paddingRight: '8px', height:"80px"}} className="left-icon"src={image} alt="waves"/>Nutrazy<em> Health</em></a>
               

                        <ul className="nav">
                            <li><Link to="/">Home</Link></li>
                            <li ><a href="/about">About</a></li>
                            <li ><a href="/allTrainers">Classes</a></li>
                            <li><a href="/#">Schedules</a></li>
                            <li ><a href="/contact">Contact</a></li> 
                            <li className="main-button"><a href="/signUp">Sign Up</a></li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);
}
}    
 