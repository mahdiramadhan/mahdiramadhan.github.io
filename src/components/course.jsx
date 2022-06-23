import React from 'react';


const CourseCard= () => {
    const infocourse =[
        {
            tahun:"2012-2014",
            coursename:"Micro Access Scholarship",
            supported:"US Embassy",
            title:"English Course",
            keterangan:"Following a series of selections to be accepted as a student in this course is one of the proudest achievements for me, being taught by several American tutor for 2 years for free makes me a person who dares to appear as an English speaker at various events."

        },
        {
            tahun:"2019 (3 months)",
            coursename:"Digital Talent Scholarship",
            supported:"Ministry of Communications and Informatics",
            title:"Internet of Things Course",
            keterangan:"Underwent a 3 month course to learn IoT, starting from communication protocols (TCP, UDP, RTSP, webRTC, HLS, HTTP, API, GRPC, MQTT), middle ware (red node), to interfacing on apps."
        },
        {
            tahun:"2020",
            coursename:"Artificial Intelligence in Medicine and Healthcare",
            supported:"IMERI FKUI & SAMSUNG RnD",
            title:"Artificial Intelligence Course",
            keterangan:"1 month course discusses various kinds of AI in depth and advance."
        },
        {
            tahun:"2022",
            coursename:"Great Product Manager: Product Management by Microsoft's PM",
            supported:"Udemy",
            title:"Product Manager Course",
            keterangan:"The highest rated product manager course by Microsoft's senior product manager, explains 101 information from basic to advance about the product manager."
        },
        {
            tahun:"2022",
            coursename:"Product Analytics Micro Certification (PAC)",
            supported:"Product School and Mix Panel",
            title:"Product Manager Course",
            keterangan:"Taxonomy, Framing retention, analyzing retention, funnels, trend spotting, etc."
        },
        {
            tahun:"2022",
            coursename:"Choosing Your Product Tech Stack",
            supported:"Product School",
            title:"Product Manager Course",
            keterangan:"Comprehensive course that talk about: fundamental of tech stack, budgeting, low code / no code tools, etc."
        },
        {
            tahun:"2022",
            coursename:"Leadership for Product Manager",
            supported:"Product School",
            title:"Product Manager Course",
            keterangan:"Comprehensive online course that provide information about: vision, OKR driven product roadmaps, product lifecycle, design thinking, agile product team, product led growth, etc."
        },
        {
            tahun:"2022",
            coursename:"Side Hustle for Product Managers",
            supported:"Product School",
            title:"Product Manager Course",
            keterangan:"The comprehensive online course which includes: business strategy, competitive analysis, market research, prototype, MVP, GTM, OKR (goals, roles, norms), roadmap, retrospective, and A/B Testing."
        },
        {
            tahun:"2022",
            coursename:"Product Masterclass: How to Build Digital Products",
            supported:"Product School",
            title:"Product Manager Course",
            keterangan:"Fundamental course that talk about branding, build and break software monopolies, cognitive biases, 3 bias in product and how to avoid them."
        }
    ];
    const rendercard=(card, index)=>{
        return(
                <div>
                    <div key={index}>
                        <div className= "row">
                            
                                <b><p className='mb-1'>{card.coursename}</p></b>
                                <p className='mb-1'><i>{card.title} supported by {card.supported}, {card.tahun}</i></p> 
                                <p className='mb-4'>{card.keterangan}</p>
                            
                        </div>
                    </div>  
                </div>
        )
    }
    return (
        <div>
            <p className='mb-0' style={{fontWeight:'bolder'}}>Course</p>
            <hr style={{borderTop: '3px solid black'}}/>   
            <div >
                {infocourse.map(rendercard)}     
            </div>
         </div>

    )
}
   
  
export default CourseCard
