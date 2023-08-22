import React from 'react';
import { Steps } from 'antd';




function Educationpage(){
    return(
        <>
            <div className='e5'>   
                <h3 className="s4">EDUCATION</h3> <br/>
                <Steps
                    progressDot
                    current={3}
                    items={[
                        {
                        title: 'Diploma',
                        description: 'Thiagarajar Polytechnic College.',
                        },
                        {
                        title: 'Bachelor Of Engineering',
                        description: 'Government College Of Engineering Bargur.',
                        },
                        {
                        title: 'Full Stack Web Development',
                        description: 'crampete learning centre Chennai.',
                        },
                    ]}
                />
            </div>     
            
        </>      
    )
}

export default Educationpage;