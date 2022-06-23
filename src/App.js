import './App.css';
import React from 'react';
import {github,grabcad,linkedin,researchgate,medium} from './components/assets/index';
import EducationCard from './components/educationcard';
import OrganizationCard from './components/organization';
import CourseCard from './components/course'
// import PublicationCard from './components/publication';

function App() {
  return (
    <>
    <div className='background'> 
    <p style={{fontSize:'30px',color:'white', textAlign:'center', padding:'63px'}}>NO ONE CAN DEFEAT A CREATIVE MAN</p>
    </div>
  <div className='container-fluid justify-content-md-center maxmax'>
    <div className='row'>  
      <p style={{fontWeight:'bold', textAlign:'center', fontSize:'24px', marginBottom:'1px',marginTop:'5px'}}>Muhammad Mahdi Ramadhan</p>
      <p style={{fontWeight:'bold',textAlign:'center', fontSize:'20px',marginTop:'1px'}}>Product Manager</p>
    </div>
    <div className='row justify-content-md-center'>
      <div className = 'col col-md-auto'>
          <a href="https://github.com/mahdiramadhan">
            <img src={github} className='responsive '/>
          </a>
      </div>
      <div className = 'col col-md-auto '>
          <a href="https://grabcad.com/mahdi.ramadhan-2/models">
            <img src={grabcad} className='responsive'/>
          </a>
          </div>
      <div className = 'col col-md-auto'>
          <a href="https://id.linkedin.com/in/muhammad-mahdi-ramadhan">
            <img src={linkedin} className='responsive'/>
          </a>
          </div>
          <div className = 'col col-md-auto'>
          <a href="/">
            <img src={researchgate} className='responsive'/>
          </a>  
          </div>      
          <div className = 'col col-md-auto'>
          <a href="https://medium.com/@Mahdi_ramadhan">
            <img src={medium} className='responsive'/>
          </a>
          </div>
      </div>
      <br/>
      <p className='mb-0' style={{fontWeight:'bolder'}}>Profile</p>
      <hr style={{borderTop: '3px solid black'}}/>
      <p>I am a resourceful and experienced Product Manager. 
        Highly capable in pre, during, and after product development with ±2 years experience,
         Lead more than 8 cross-functional teams, diligent in technical and strategy to fulfill OKR of the product, and really like to bring people together to create something great and become even better together,
          I believed the key is <b>T.E.A.M</b>, Together Everyone Achieve More.
          Seeking to leverage proven leadership and strategy skills to grow revenue at
          PT Digitalinstincts Teknologi and PT Bringin Inti Teknologi.
          </p>
      <EducationCard/>
      <OrganizationCard/>
      <CourseCard/>
      {/* <PublicationCard/> */}
    </div>
  
    

  </>
  );
}

export default App;
