
import React, {Component} from 'react';
import Header from "./header.component";
import TrainerImage from "../assets/images/trainers/trainer-1.jpg"
import TrainerTile from './trainerTile.component';
import image1 from "../assets/images/line-dec.png"
import Navbar from "./navbar.component";
export default class AllTrainers extends Component{
  
    render(){
return(
    <div>

  <Navbar/>
    <Header/>
    
    
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
      <div className="section-heading">
            <h2>All Trainers <em>Us</em></h2>
            <img src={image1} alt="waves"/>
            <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
      </div>
        <div className="row" >

          <TrainerTile/>
          <TrainerTile/>
          <TrainerTile/>

        </div>
        <br></br>

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