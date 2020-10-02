
import React, {Component} from 'react';
import Navbar from "./navbar.component";
import Header from "./header.component";
import AllBlog from "./allBlog.component.js"
import TrainerImage from "../assets/images/trainers/trainer-1.jpg";
import image1 from "../assets/images/line-dec.png"
import Background from "../assets/images/schedule-bg.jpg"
import TrainerTile from './trainerTile.component';

export default class LandingPage extends Component{
  
    render(){
return(
    <div>
    
    <Header/>
    
    <AllBlog/>
    
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px", backgroundImage:`url(${Background})`}}><br></br>
      <div className="container" data-aos="fade-up">
      <div className="section-heading">
            <h2>Our <em>Trainers</em></h2>
            <img src={image1} alt="waves"/>
            <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
      </div>
        <div className="row" >

        
          <TrainerTile/>
          <TrainerTile/>
  
          
          <TrainerTile/>
        </div><br></br>
        <div className="row" >
            <TrainerTile/>
            <TrainerTile/>
            <TrainerTile/>
        </div>
      <br></br>
      </div>
    </section>

    </div>
);
}
} 