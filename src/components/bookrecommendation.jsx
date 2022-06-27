import React from 'react';
import {Carousel} from 'react-bootstrap';


const BookrecommendationCard= () => {
    const infoBookrecommendation =[
        {
            keterangan:"Get 5th place in Virginia, USA, 2016 and 6th place in Florida, USA 2017 in Roboboat international competition as the lead of the Mechanical Engineer Division." 
        },
        
        {
            keterangan:"Get 1st place at Surabaya, IND, 2018 in the International ASEAN ROV MATE as Chief of Technical Officer." 
        },
        {
            keterangan:"Speaker in several international conferences (2018 Depok IDN, 2019 Bandung IDN, 2019 Bali IDN, 2020 Ho Chi Min VNM, 2021 Phuket THA)." 
        },

    ];
    const rendercard=(card, index)=>{
        return(
                <div>
                    <Carousel fade >
                        <Carousel.Item  key={index}>
                        <Carousel.Caption >
                        <h3>{card.keterangan}</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                    
                    </Carousel>
                </div>
        )
    }
    return (
        <>
           {/* <p className='mb-0 mt-4' style={{fontWeight:'bolder'}}>Book Recommendation</p>
            <hr style={{borderTop: '3px solid black'}}/>     
                {infoBookrecommendation.map(rendercard)}  */}
                
         </>
    )
}
   
  
export default BookrecommendationCard
