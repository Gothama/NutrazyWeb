
import React, {Component} from 'react';
import video from "../assets/images/gym-video.mp4"

export default class Navbar extends Component{
  
    
    render(){
return(
    <div className="main-banner" id="top">
    <video id="bg-video" loop muted autoPlay src={video} type="video/mp4" />
   
    <div className="video-overlay header-text">
        <div className="caption">
            <h6>work harder, get healthier</h6>
            <h2>easy with our <em>trainers</em></h2>
            <div className="main-button scroll-to-section">
                <a href="#features">Become a member</a>
            </div>
        </div>
    </div>
</div>
);
}
}   