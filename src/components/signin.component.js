
import React, {Component} from 'react';
import image1 from "../assets/images/line-dec.png"


export default class SignIn extends Component{
  logout() {
   localStorage.setItem("loggedIn" , "logginIn");
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
                        <h2>Sign <em>In</em></h2>
                        <img src={image1} alt="waves"/>
                        <p>Voluptate nulla velit consectetur excepteur excepteur esse non velit velit.</p>
                    </div>
            </div>
                
                <div className="col-12" id="signUp">
                    <div className="contact-form" >
                        <form id="contact" method="post" >
                          <div className="row">
                            <div className="col-6">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div>
                          </div>
                            <div className="row">
                            <div className="col-6">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div></div>
                            <div className="row">
                            <div className="col-6">
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