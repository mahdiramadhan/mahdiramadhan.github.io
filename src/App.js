import './App.css';
import React from 'react';
import {github,grabcad,linkedin,researchgate,medium} from './components/assets/index';
function App() {
  return (
    <>
    <div className='background'> 
    <p style={{fontSize:'30px',color:'white', textAlign:'center', padding:'63px'}}>NO ONE CAN DEFEAT A CREATIVE MAN</p>
    </div>
  <div className='container-fluid '>
    <div className='row justify-content-md-center'>  
      <p style={{fontWeight:'bold', textAlign:'center', fontSize:'24px', marginBottom:'1px'}}>Muhammad Mahdi Ramadhan</p>
      <p style={{fontWeight:'bold',textAlign:'center', fontSize:'20px',marginTop:'1px'}}>Product Manager</p>
      <div className='row justify-content-md-center'>
        <div className='col-md-auto'>
          <a href="https://github.com/mahdiramadhan">
            <img src={github} style={{height:'30px'}}/>
          </a>
        </div>
        <div className='col-md-auto'>
          <a href="https://grabcad.com/mahdi.ramadhan-2/models">
          <img src={grabcad} style={{height:'30px'}}/>
          </a>
        </div>
        <div className='col-md-auto'>
          <a href="https://id.linkedin.com/in/muhammad-mahdi-ramadhan">
          <img src={linkedin} style={{height:'30px'}}/>
          </a>
        </div>
        <div className='col-md-auto'>
          <a href="/">
          <img src={researchgate} style={{height:'30px'}}/>
          </a>        
        </div>
        <div className='col-md-auto'>
          <a href="https://medium.com/@Mahdi_ramadhan">
          <img src={medium} style={{height:'30px'}}/>
          </a>
        </div>
      </div>
      <p className='mb-0' style={{fontWeight:'bolder'}}>Profile</p>
      <hr style={{borderTop: '3px solid black'}}/>
      <p>I am a resourceful and experienced Product Manager. 
        Highly capable in pre, during, and after product development with ±2 years experience,
         Lead more than 8 cross-functional teams, diligent in technical and strategy to fulfill OKR of the product, and really like to bring people together to create something great and become even better together,
          I believed the key is <b>T.E.A.M</b>, Together Everyone Achieve More.
          Seeking to leverage proven leadership and strategy skills to grow revenue at
          PT Digitalinstincts Teknologi and PT Bringin Inti Teknologi.
          </p>
      <p className='mb-0' style={{fontWeight:'bolder'}}>Education</p>
      <hr style={{borderTop: '3px solid black'}}/>
      {/* <div className='col-md-3'>
        <p>tereasdas</p>
      </div>
      <div className='col-md-9'>
        <p>dasdasdasd</p>
      </div> */}

    </div>

  </div>
  </>
  );
}

export default App;
