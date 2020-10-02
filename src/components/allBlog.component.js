
import React, {Component} from 'react';
import FoodImage1 from "../assets/images/nutrazyBlog.jpg"
import FoodImage from "../assets/images/food.jpeg"
import image1 from "../assets/images/line-dec.png"
import BlogTilecomponent from './blogTile.component';
import Navbar from "./navbar.component";

export default class AllBlog extends Component{
  
    render(){
return(
  <div>
  <Navbar/>
   
    <section id="courses " className="courses cta2" style={{paddingBottom:"10px"}}><br></br>
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
            <h2>Contact<em>Us</em></h2>
            <img src={image1} alt="waves"/>
            <p>Aute fugiat laboris non cillum culpa incididunt fugiat elit incididunt nulla fugiat esse sit..</p>
        </div>
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

        <BlogTilecomponent/>

        <BlogTilecomponent/>
        
        <BlogTilecomponent/>

      </div>
      <br></br>
      <div className="row" >

        <BlogTilecomponent/>

        <BlogTilecomponent/>

        <BlogTilecomponent/>
        
      </div>
      <br></br>
      </div>
    </section>
   </div>
  
);
}
} 