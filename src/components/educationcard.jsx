import React from 'react';
import {Accordion} from 'react-bootstrap';


const EducationCard= () => {
    const infoeducation =[
        {
            tahun:"2015-2019",
            pendidikan:"S1 Fisika",
            kampus:"Universitas Indonesia",
            keterangan:"For 4 years I studied Physics at the University of Indonesia, a campus that made me rich in experience and opened my eyes to the world of robotics and artificial intelligence. Beside of studying Physics, I have succeeded in developing several Artificial Intelligence-based technologies for the health sector, such as games controlled by brain signals, robotic arms controlled by brain signals, and automatic detection of cancer organs on CT scan images."
        

        },
        {
            tahun:"2020-2022",
            pendidikan:"S2 Ilmu Fisika",
            kampus:"Universitas Indonesia",
            keterangan:"While sitting and drinking coffee in the cafeteria, a lecturer invited me to continue my Masters's in Physics with a research path, he was willing to pay all my tuition fees as long as I could publish research in several reputable international journals. Finally, the challenge has been completed, in 2022 all the promises have been paid off."
        }
        
    ];
    const rendercard=(card, index)=>{
        return(
                <div>
                    <div key={index}>
                        <div className= "row">
                            <div className='col-4 col-md-2 '>
                                <b><p className='mb-1'>{card.tahun}</p></b>
                                <p className='mb-1'>{card.pendidikan}</p>
                                <p className='mb-4'>{card.kampus}</p>
                            </div>
                            <div className='col-8 col-md-10 '>
                                <p className='m-auto'>{card.keterangan}</p>
                            </div>
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
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>
                        {infoeducation.map(rendercard)} 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>  
        </>

    )
}
   
  
export default EducationCard
