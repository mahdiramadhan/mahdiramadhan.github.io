import React from 'react';
import {Accordion} from 'react-bootstrap';


const PublicationCard= () => {
    const infopublication =[
        {
            tahun:"2022",
            publisher:"Iranian Journal of Medical Physics",
            link:"https://ijmp.mums.ac.ir/article_19688.html",
            title:"Development of Artificial Intelligence as a Conversion Tool for Cine Electronic Portal Imaging Device Images to Radiotherapy Dosimetry: Preliminary Study",
            keterangan:""
        },
        {
            tahun:"2021",
            publisher:"Arxiv",
            link:"https://arxiv.org/abs/2005.04562",
            title:"Fast and accurate detection of Covid-19-related pneumonia from chest X-ray images with novel deep learning model",
            keterangan:""
        },
        
        {
            tahun:"2020",
            publisher:"IOP",
            link:"https://iopscience.iop.org/article/10.1088/1742-6596/1528/1/012028/meta",
            title:"Verification of Dose Distribution on The Gamma Knife Perfexion Radiosurgery Using Gafchromic Ebt3 Film: Rando Fantom Study",
            keterangan:""
        },
        {
            tahun:"2019",
            publisher:"IEEE",
            link:"https://ieeexplore.ieee.org/abstract/document/8811017/",
            title:"Classification of EEG signals from motor imagery of hand grasp movement based on neural network approach",
            keterangan:""
        },
        {
            tahun:"2019",
            publisher:"AIP",
            link:"https://aip.scitation.org/doi/abs/10.1063/1.5132445",
            title:"Development of visual request system by using wireless EEG signal to help communication of patients suffering locked-in syndrome",
            keterangan:""
        },
        {
            tahun:"2017",
            publisher:"Roboboat International",
            link:"https://scholar.google.com/scholar?oi=bibs&cluster=2742488359951372089&btnI=1&hl=id",
            title:"Makara 07-autonomous surface vehicle",
            keterangan:""
        },
       
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
                    <Accordion.Header>International Research Publication</Accordion.Header>
                    <Accordion.Body>
                        {infopublication.map(rendercard)} 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
         </>
    )
}
   
  
export default PublicationCard
