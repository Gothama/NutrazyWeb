
import React, {Component} from 'react';
import TrainerProfileHeader from "./trainerProfileHeader.component";
import image1 from "../assets/images/line-dec.png"
import blogImage from "../assets/images/foodBlogportrait.jpg"

export default class Blog extends Component{
  
    render(){
return(
    <div >
   
    <TrainerProfileHeader/>
   <section className="cta2" style={{paddingBottom:"20px"}}>
    <div className="container" style={{paddingTop:"100px"}}>
    
        <div className="row" style={{paddingBottom:"100px"}}>
        <div className="col-5" >
                    <div className="section-heading" style={{}}>
                        <h2 style={{color:"white"}}>Blog <em>Sports</em></h2>
                        <img src={image1} alt="waves"/>
                        <p style={{color:"white",textAlign:"justify", fontSize:"20px"}}> Labore sit anim ad esse in sunt commodo
                        nisi anim. Sit nisi velit sunt ea dolore nulla. Cillum excepteur Lorem proident aliquip sit nisi commodo incididunt consequat elit. Dolor nostrud irure culpa nisi dolor do enim. Id est ut id esse. 
                        Occaecat velit voluptate incididunt exercitation consectetur laborum labore ex cupidatat commodo sint 
                        incididunt est qui.Aute id tempor ad ut excepteur amet exercitation eiusmod. Do Lorem in quis tempor 
                        officia enim do culpa aliquip adipisicing sunt exercitation. Proident do minim aliqua officia anim velit 
                        labore voluptate velit. Cupidatat commodo tempor labore adipisicing officia laboris magna occaecat et do nisi 
                        culpa. Tempor sit duis veniam eiusmod duis ad in quis exercitation laboris dolor sunt. Do qui eiusmod proident ullamco 
                        mollit magna aliqua excepteur sint qui officia consectetur.  </p>
                    </div>
        </div> <div className="col-1"></div>
        
        <div className="col-6 col-md-6 d-flex align-items-stretch courses " data-aos="zoom-in" data-aos-delay="100" style={{backgroundColor:"white", borderRadius:"10px"}}>
            <div className="course-item" style={{paddingTop:"10px"}}>
              <img src={blogImage} class="img-fluid" alt="..." style={{borderRadius:"5px"}}/>
              <div className="course-content">
                <div className="d-flex align-items-center mb-3">
                  <h4 style={{marginRight:"10px"}}>Register</h4><h4 style={{marginRight:"10px"}}>Free Trail</h4>
                  <p className="price" style={{paddingLeft:"250px"}}>$169</p>
                </div>

                
                <div className="trainer d-flex justify-content-between align-items-center">
              
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div><br/>
          </div>
        
        </div>
        <div className="row" >
        <div className="col-6 ">
            <div className="info">
                <div style={{textAlign: 'justify'}}>
               Mollit do non consequat veniam eu ad nostrud. Labore fugiat dolor aute consectetur ad anim aliqua sint occaecat in. 
               Aute aliquip ex officia sit incididunt ullamco officia. Consequat tempor voluptate qui tempor reprehenderit deserunt 
               commodo do incididunt.

Nisi mollit esse mollit sit aliquip commodo laboris ullamco non nostrud. Velit eiusmod enim tempor labore adipisicing enim laboris ex. 
Veniam enim occaecat eu fugiat do consectetur in veniam Lorem. Mollit cillum proident do culpa anim dolor consectetur labore officia 
exercitation labore nisi sint voluptate. Enim aliquip sint aliquip voluptate sunt anim.Officia in dolore aliqua officia enim fugiat 
minim non aliquip do aliqua sunt nostrud. Dolore mollit duis minim est commodo consectetur est quis qui deserunt sunt dolore. Ipsum c
onsectetur esse excepteur qui magna reprehenderit laboris minim quis anim.


Eu velit laborum Lorem aliquip quis. Aliqua est minim exercitation laboris dolore reprehenderit id incididunt minim ullamco. Nisi qui cupidatat incididunt aliqua sit cillum duis sint reprehenderit sit labore dolor laboris esse. Voluptate velit proident minim culpa fugiat est esse commodo anim reprehenderit. Excepteur eiusmod culpa quis officia. Enim voluptate incididunt anim aliqua ut aute voluptate aliquip et. Magna ut velit minim ea minim Lorem qui commodo ullamco elit non proident aliquip minim.

                </div>
            </div>
        </div>
        <div className="col-6">
            <div className="info">
                <div style={{textAlign: 'justify'}}>
                At IBACK entertainment, we put 
                your objectives first. We learn about your event, we focus on your challenges, and 
                we plan events to support your goals. No matter what stage of the planning you are in, 
                we would welcome the opportunity to help you make your event the best it can be. IBACK 
                entertainment strives to be the best running event management company in the Sri Lanka 
                producing the highest quality events that not only set the standard for event production, 
                but also set the trend for the industry.

                LEARN: WE WANT TO GET TO KNOW YOU
                What is your event about? What are your challenges? What are the issues that your members or 
                clients are dealing with? By thoroughly understanding your company’s leadership culture, how 
                your organization operates and your long-term strategic plans, we become a part of your team. 
                Our model works best when we can become more than the “hired help” and can become strategic event 
                management partners, so the first step for us is about getting to know you and your event.
                </div>
            </div>
        </div>

      </div>
    </div></section>
  
    </div>
);
}
}   