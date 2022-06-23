import React from 'react';
import {Accordion} from 'react-bootstrap';


const PublicationCard= () => {
    const infopublication =[
        {
            tahun:"2020",
            publisher:"Arxiv",
            link:"https://arxiv.org/abs/2005.04562",
            title:"Fast and accurate detection of Covid-19-related pneumonia from chest X-ray images with novel deep learning model",
            keterangan:"#######"
        }
    ];
    const rendercard=(card, index)=>{
        return(
                <div>
                    <div key={index}>
                        <div className= "row">
                            
                                <b><a href={card.link} target="_blank"><p className='mb-1'>{card.title}</p></a></b>
                                <p className='mb-1'><strong> published by {card.publisher}, {card.tahun}</strong></p> 
                                <p className='mb-4'>{card.keterangan}</p>
                            
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
                    <Accordion.Header>Publication</Accordion.Header>
                    <Accordion.Body>
                        {infopublication.map(rendercard)} 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
         </>
    )
}
   
  
export default PublicationCard
