
import React, {Component} from 'react';
import Navbar from "./navbar.component";
import Header from "./header.component";
import AllBlog from "./allBlog.component.js"
import TrainerImage from "../assets/images/trainers/trainer-1.jpg";
import image1 from "../assets/images/line-dec.png"

export default class LandingPage extends Component{
  
    render(){
return(
    <div>
    
    <Header/>
    
    <AllBlog/>
    
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
      <div className="section-heading">
            <h2>Contact <em>Us</em></h2>
            <img src={image1} alt="waves"/>
            <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
      </div>
        <div className="row" >

        
          <div className="col-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="course-item">
              <img src={TrainerImage} class="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Excercises</h4>
                  <p className="price">$169</p>
                </div>

                <h3><a href="course-details.html">Website Design</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={TrainerImage} class="img-fluid" alt=""/>
                    <a href="/trainerProfile"><span>Antonio</span></a>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="course-item">
              <img src={TrainerImage} class="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Excercises</h4>
                  <p className="price">$250</p>
                </div>

                <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={TrainerImage} className="img-fluid" alt=""/>
                    <span>Lana</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div> 
          
          <div className="col-4 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="course-item">
              <img src={TrainerImage} class="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={TrainerImage} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;20
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div><br></br>

<br></br>
      </div>
    </section>

    </div>
);
}
} 