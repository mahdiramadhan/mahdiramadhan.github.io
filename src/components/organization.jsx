import React from 'react';


const OrganizationCard= () => {
    const infoorganization =[
        {
            tahun:"2017-2018",
            tim:"Autonomous Marine Vehicle Universitas Indonesia (AMV UI)",
            position:"Chief of Technical Officer",
            keterangan:"First joined the team as a mechanical member, never stopped learning to study mechanical, electricity, and programming of robots until I was appointed as chief of the technical officer. Finally, I brought the team for the first time in our history to get 1st place in the international robotics competition."

        },
        {
            tahun:"2018-2019",
            tim:"Tim Robotika Universitas Indonesia (TRUI)",
            position:"Head of Coaching",
            keterangan:"I believe champions produce other champions, why? because the standard is already made. The success of the AMV UI team led me to be appointed as the head of coaching in the UI robotics team. As head of coaching, I researched the satisfactions, and pain points of all stakeholders, turning them into features that can be utilized for the next generation of teams so that years later this team can become champions in various national and international robotics competitions."
        }
        
    ];
    const rendercard=(card, index)=>{
        return(
                <div>
                    <div key={index}>
                        <div className= "row">
                            
                                <b><p className='mb-1'>{card.tahun}</p></b>
                                <p className='mb-1'>{card.tim}</p>
                                <p className='mb-1'>{card.position}</p>
                            
                            
                                <p className='mb-4'>{card.keterangan}</p>
                            
                        </div>
                    </div>  
                </div>
        )
    }
    return (
        <div>
            <p className='mb-0' style={{fontWeight:'bolder'}}>Organization</p>
            <hr style={{borderTop: '3px solid black'}}/>   
            <div >
                {infoorganization.map(rendercard)}     
            </div>
         </div>

    )
}
   
  
export default OrganizationCard
