
import React, {Component} from 'react';
import Navbar from "./navbar.component";
import Header from "./header.component";
import Footer from "./footer.component.js";
import FoodImage1 from "../assets/images/nutrazyBlog.jpg"
import FoodImage from "../assets/images/food.jpeg"
export default class AllBlog extends Component{
  
    render(){
return(
   
   
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
    <div className="container" data-aos="fade-up">
      <div className="row" style={{paddingBottom:"50px"}}>
      <div className="col-12 " data-aos="zoom-in" data-aos-delay="100">
          <div className="course-item">
            <img src={FoodImage1} class="img-fluid" alt="..."/>
            <div className="course-content">
              

              <h3><a href="/Blog">Diet Blogs</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={FoodImage} class="img-fluid" alt=""/>
                  <a href="/blog"><span>Antonio</span></a>
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
      </div>  
      <div className="row" >

        <div className="col-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="course-item">
            <img src={FoodImage} class="img-fluid" alt="..."/>
            <div className="course-content">
              

              <h3><a href="course-details.html">Diet Blogs</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={FoodImage} class="img-fluid" alt=""/>
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
            <img src={FoodImage} class="img-fluid" alt="..."/>
            <div className="course-content">
              

              <h3><a href="course-details.html">Blogs</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={FoodImage} className="img-fluid" alt=""/>
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
            <img src={FoodImage} class="img-fluid" alt="..."/>
            <div className="course-content">
              
              <h3><a href="course-details.html">Copywriting</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={FoodImage} className="img-fluid" alt=""/>
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
<div className="row" >
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
          <div className="course-item">
            <img src={FoodImage} class="img-fluid" alt="..."/>
            <div className="course-content">
              

              <h3><a href="course-details.html">Blog</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={FoodImage} className="img-fluid" alt=""/>
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


        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
          <div className="course-item">
            <img src={FoodImage} class="img-fluid" alt="..."/>
            <div className="course-content">
              

              <h3><a href="course-details.html">Blog</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={FoodImage} className="img-fluid" alt=""/>
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


        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
          <div className="course-item">
            <img src={FoodImage} class="img-fluid" alt="..."/>
            <div className="course-content">
             

              <h3><a href="course-details.html">Blog</a></h3>
              <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img src={FoodImage} className="img-fluid" alt=""/>
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

      </div>
<br></br>
    </div>
  </section>
  
  
);
}
} 