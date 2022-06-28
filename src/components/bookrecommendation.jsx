import React from 'react';
import {Carousel, Accordion} from 'react-bootstrap';
import { lean,
    database,
    market,
    product,
    productowner,
    escape,
    dont,
    atract,
    develop, 
    ux} from './assets';


const BookrecommendationCard= () => {
    const infoBookrecommendation =[
        {
            image:productowner,
            judul:'Don McGreal, Ralph Jocham - The Professional Product Owner_ Leveraging Scrum as a Competitive Advantage-Addison-Wesley Professional (2018)',
            keterangan:"" 
        },
        {
            image:product,
            judul:'Aswin Pranam (auth.) -  Product Management Essentials_ Tools and Techniques for Becoming an Effective Technical Product Manager (2018, Apress) - libgen.lc',
            keterangan:"" 
        },
        {
            image:ux,
            judul:'Lean UX Applying Lean Principles to Improve User Experience by Jeff Gothelf, Josh Seiden',
            keterangan:"" 
        },
        {
            image:escape,
            judul:'Melissa Perri - Escaping the Build Trap_ How Effective Product Management Creates Real Value (2018, O’Reilly Media)',
            keterangan:"" 
        },
        {
            image:database,
            judul:'John Garmany, Jeff Walker, Terry Clark - Logical Database Design Principles (2005, Auerbach Publications)',
            keterangan:"" 
        },
        {
            image:market,
            judul:'Philip Kotler - Marketing Insights from A to Z_ 80 Concerns Every Manager Needs to Know-Wiley (2003)',
            keterangan:"" 
        },
        {
            image:dont,
            judul:"Steve Krug - Don't Make Me Think_ A Common Sense Approach to Web Usability, 2nd Edition-New Riders (2005)",
            keterangan:"" 
        },
        {
            image:atract,
            judul:'Philip Kotler, Hermawan Kartajaya, S. David Young - Attracting Investors_ A Marketing Approach to Finding Funds for Your Business-Wiley (2004)',
            keterangan:"" 
        },
        {
            image:develop,
            judul:'Developing Effective Websites A Project Managers Guide by Roy Strauss Patrick Hogan',
            keterangan:"" 
        },
        {
            image:lean,
            judul:"[Lean (O'Reilly)] Alistair Croll, Benjamin Yoskovitz - Lean Analytics_ Use Data to Build a Better Startup Faster (2013, O'Reilly Media)",
            keterangan:"" 
        },
      
       

    ];
    const rendercard=(card, index)=>{
        return(

    
                <div key={index} className='col m-auto mb-4'>
                        <img   src={card.image}  style={{height:'200px'}}/>
                </div>
  
        )
    }
    return (
        <>
            <hr style={{borderTop: '3px solid black'}}/> 
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Book Recommendation</Accordion.Header>
                    <Accordion.Body>
                    <p>Being a product manager keeps me driven by data and books, this will help me in every decision I make on Product development life cycle (pre-during-post). Here are the books:</p>    
                    <div className='row justify-content-center'>
                        {infoBookrecommendation.map(rendercard)}    
                    </div>             
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    )
}
   
  
export default BookrecommendationCard
