
import React, {Component} from 'react';
import Header from "./header.component";
import image from "../assets/images/features-first-icon.png"
import image1 from "../assets/images/line-dec.png"
import Navbar from "./navbar.component";

export default class About extends Component{
  
    render(){
return(
    <div>
    <Navbar/>
    <Header/>
    <section className="section cta2" id="features" style={{paddingBottom:"10px"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Choose <em>Program</em></h2>
                        <img src={image1} alt="waves"/>
                        <p>Ipsum duis dolor nisi ullamco amet sunt anim aliquip veniam nostrud sunt culpa irure..</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className="features-items">
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={image} alt="First One"/>
                            </div>
                            <div className="right-content">
                                <h4>Basic Fitness</h4>
                                <p>Ipsum duis dolor nisi ullamco amet sunt anim aliquip veniam nostrud sunt culpa irure..</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={image} alt="second one"/>
                            </div>
                            <div className="right-content">
                                <h4>New Gym Training</h4>
                                <p>Ipsum duis dolor nisi ullamco amet sunt anim aliquip veniam nostrud sunt culpa irure...</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={image} alt="third gym training"/>
                            </div>
                            <div className="right-content">
                                <h4>Basic Muscle Course</h4>
                                <p>Credit goes to <a rel="nofollow" href="https://www.pexels.com" target="_blank">Pexels website</a> Ipsum duis dolor nisi ullamco amet sunt anim aliqu..</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="features-items">
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={image} alt="fourth muscle"/>
                            </div>
                            <div className="right-content">
                                <h4>Advanced Muscle Course</h4>
                                <p>Ipsum duis dolor nisi ullamco . <a rel="nofollow" href="" target="_parent">Digital Marketing</a> or <a href="asd">Corporate</a> Ipsum duis dolor nisi ullamco .</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={image} alt="training fifth"/>
                            </div>
                            <div className="right-content">
                                <h4>Yoga Training</h4>
                                <p>Ipsum duis dolor nisi ullamco amet sunt anim aliquip veniam nostrud sunt culpa irure...</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={image} alt="gym training"/>
                            </div>
                            <div className="right-content">
                                <h4>Body Building Course</h4>
                                <p>Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
    </div>
    
);
}
}   