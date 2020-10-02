
import React, {Component} from 'react';
import AOS from "aos";
import backgroundim from '../assets/images/training-image-01.jpg'

export default class TrainerProfileHeader extends Component{
    componentDidMount(){
        AOS.init({duration: 1000,
            once:true});
    }
    
    render(){
return(
    <section>
    <div id ="trainerProfileHeader" className="d-flex align-items-center main-banner" style={{width: '100%',height: '80h',backgroundImage:`url(${backgroundim})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
        
    </div>
    </section>
);
}
}   