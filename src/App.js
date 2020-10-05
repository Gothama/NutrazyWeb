import React from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom";

import  '../src/assets/css/bootstrap.min.css'; 
import '../src/assets/css/font-awesome.css'; 
import '../src/assets/css/ourcss.css'; 
import '../src/assets/boxicons/css/boxicons.min.css'; 
import '../src/assets/aos/aos.css'
import '../src/assets/boxicons/css/boxicons.min.css'; 
 

import Contact from "./components/contact.component";
import TrainerProfile from "./components/trainerProfile.component";
import AllTrainers from "./components/allTrainers.component";
import SignIn from "./components/signin.component";
import SignUp from "./components/signup.component";
import LandingPage from "./components/landingPage.component";
import About from "./components/about.component";
import Blog from "./components/blog.component";
//import Navbar from './components/navbar.component';
//import Footer from './components/footer.component';
import MyAccount from './components/timeTablecomponent';
import AllDieticians from './components/allDieticians.component';
import AllBlog from "./components/allBlog.component";

function App() {
  return (
    <Router>
    {/*<Navbar/>*/}
    <Route path = "/" exact component={LandingPage}/>
    <Route path = "/trainerProfile" exact component={TrainerProfile}/>
    <Route path = "/contact" exact component={Contact}/>
    <Route path = "/allTrainers" exact component={AllTrainers}/>
    <Route path = "/about" exact component={About}/>
    <Route path = "/signIn" exact component={SignIn}/>
    <Route path = "/blog" exact component={Blog}/>
    <Route path = "/signUp" exact component={SignUp}/>
    <Route path = "/account" exact component={MyAccount}/>
    <Route path = "/allDieticians" exact component={AllDieticians}/>
    <Route path = "/allBlogs" exact component={AllBlog}/>
     {/*<Footer/>*/}
    
  </Router>
  );
}

export default App;
