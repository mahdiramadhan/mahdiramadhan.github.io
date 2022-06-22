import React from 'react';


const OrganizationCard= () => {
    const infoorganization =[
        {
            tahun:"2017-2018",
            tim:"Autonomous Marine Vehicle Universitas Indonesia (AMV UI)",
            position:"Chief of Technical Officer",
            keterangan:"Lead on technical division , etc."

        },
        {
            tahun:"2018-2019",
            tim:"Tim Robotika Universitas Indonesia (TRUI)",
            position:"Kepala Pembinaan",
            keterangan:", etc."
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
