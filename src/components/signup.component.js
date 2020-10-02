
import React, {Component} from 'react';

import image1 from "../assets/images/line-dec.png"

export default class SignUp extends Component{
  logout() {
    localStorage.setItem("loggedIn" , "loggedIn");
    window.location.href = '/';
 }
    render(){
return(
    <div>
    <div class="cta2">
   
    

    <section className="container "  >
        <div className="container-fluid">
            <div className="row" >
            <div className="col-12" >
                    <div className="section-heading">
                        <h2>Sign <em>Up</em></h2>
                        <img src={image1} alt="waves"/>
                        <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
                    </div>
            </div>
                
                <div className="col-12" id="signUp">
                    <div className="contact-form" >
                        <form id="contact" action="" method="post">
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-12 col-sm-12">
                              <fieldset>
                                <input name="subject" type="text" id="subject" placeholder="Subject"/>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                              <button type="button" id="form-submit" className="main-button" onClick={this.logout}>Send Message</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div><br></br>
    </section>
    
    </div></div>
);
}
}   