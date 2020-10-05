import React, {Component} from 'react';
import $ from 'jquery';
export default class AddSlideShow extends Component{
    componentDidMount(){
        $("#slideshow > div:gt(0)").hide();

        setInterval(function() {
          $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        }, 3000); 
    }
  
    render(){
return(
        

 
    <div id="slideshow" style={{height:"400px"}}>
   <div className="div1">
     <img className="img1"style={{height:"400px" , width:"1520px" ,objectFit: "cover"}} src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
   </div>
   <div className="div1">
     <img className="img1" style={{height:"400px" , width:"1520px",objectFit: "cover"}}src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"/>
   </div>
   <div className="div1">
     <img className="img1"style={{height:"400px" , width:"1520px" ,objectFit: "cover"}} src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
   </div>
   <div className="div1">
     <img className="img1" style={{height:"400px" , width:"1520px",objectFit: "cover"}}src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"/>
   </div>
</div>



);
}
} 