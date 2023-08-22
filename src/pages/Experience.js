import React from 'react';
import { Steps } from 'antd';

function Experiencepage(){
    return(
        <>
            <div className='e3'>
              <h3 className="s4">EXPERIENCE</h3><br/>
              <div className='e1'>
                
                <Steps
                  className='e2'
                  direction="vertical"
                  current={3}
                  items={[
                    {
                      title: 'Engine Testing Engineer',
                      description:' 2018 - 2020 Mahindra and Mahindra Ltd Chennai',
                    },
                    {
                      title: 'Electric Vehicle',
                      description:'Jan 2023 - Mar 2023 TSDC Naan Muthalvan Scheme',
                    },
                    {
                      title: ' Full Stack Web Development',
                      description:'December 2022 - June 2023 crampete learning centre  ',
                    },
                  ]}
                />
              </div>
            </div>
                  

           
        </>
    )
}

export default Experiencepage;