import React from 'react';
import {Accordion} from 'react-bootstrap';


const AchievementCard= () => {
    const infoachievement =[
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
                    <div key={index}>
                        <div className= "row">
                               <ul>
                                    <li className='mb-2'>{card.keterangan}</li>
                                </ul> 
                        </div>
                    </div>  
                </div>
        )
    }
    return (
        <>
            <hr style={{borderTop: '3px solid black'}}/>  
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Achievement</Accordion.Header>
                    <Accordion.Body>
                        {infoachievement.map(rendercard)} 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
         </>
    )
}
   
  
export default AchievementCard
