import React from 'react';
import {Accordion} from 'react-bootstrap';


const WorkExperienceCard= () => {
    const infoWorkExperience =[
        {
            tahun:"October 2019 - January 2020",
            job:"AI Engineer",
            company:"AIRA",
            keterangan:"This is my first work experience, I am in charge of making an AI model, this model aims to press the bones on a chest X-ray image. I integrated the model with the website. I made it using python, reactJs (front end), Django (back end), and Postgres SQL (database)."

        },
        {
            tahun:"January 2020 - October 2020",
            job:"CEO",
            company:"Noobtech Indonesia",
            keterangan:"In the first week on January 2020, the University of Indonesia has a start-up incubation program for students and alumni, my colleagues and I built a start-up called Noobtech Indonesia, and my duties as a CEO are like Product Manager and Marketing, from starting to develop a product vision, business canvas model, go to market strategy, OKR, timeline, budget, find investor and client by contacting on WA, email, Linkedin, and also pitching at various funding events, our team was among the top 20 Bali start-ups from BeKraf."
        },
        {
            tahun:"2020 - Current",
            job:"Front End Developer",
            company:"Freelance",
            keterangan:"Apart from my main job, I also work as a freelance front-end developer using the ReactJs programming language, I create websites for company profiles, wedding invitations, webinars, conferences, etc."
        },
        {
            tahun:"October 2020 - December 2020",
            job:"Front End Developer",
            company:"PT Kelas Kita Edukasi Indonesia",
            keterangan:"Side by side as a master's degree student, I work as a Front-end developer, my job is to create a website display following the UI/UX designer's request and connect APIs made by Back end developers. Work in sprints, do weekly reports to all company member."
        },
        {
            tahun:"January 2021 - March 2022",
            job:"Product Specialist",
            company:"PT Digitalinstinct Teknologi",
            keterangan:"Working here for more than a year has made me ready to declare myself a product manager, here I meet many clients, national and international, translate each of their pain points into product requirement documents, then transform it into functional specification documents and backlogs which I deliver to developers, UI/UX designer, M2M division, IT Support, system analyst, and also RnD division. I also must study every new specifications hardware to create an appropriate system, create the budget and timeline expectation for every development, create OKR, go to market strategy, technical documentation, and testing scenarios (either API and UI)."
        },
        {
            tahun:"April 2022 - Current",
            job:"AI & IoT Specialist",
            company:"PT BRIIT (BRI Group)",
            keterangan:"Here I work with many project managers as a product manager and technology expert, I create technical specifications, and estimate budgets, development timelines, and backlogs (scrum framework)."
        },
        
    ];
    const rendercard=(card, index)=>{
        return(
                <div>
                    <div key={index}>
                        <div className= "row">     
                            <div className='col-4 col-md-3 '>
                                    <b><p className='mb-1'>{card.tahun}</p></b>
                                </div>
                                <div className='col-8 col-md-9 '>
                                    <b><p className='mb-1'>{card.job}</p></b>
                                    <p className='mb-1'>{card.company}</p>
                                    <p className='mb-4'>{card.keterangan}</p>
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
                    <Accordion.Header>Work Experienced</Accordion.Header>
                    <Accordion.Body>
                        {infoWorkExperience.map(rendercard)} 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
         </>
    )
}
   
  
export default WorkExperienceCard
