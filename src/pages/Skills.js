import React from 'react';
import { Progress } from 'antd';


function Skillspage(){
    return (
        <>  
            <div className='s5'>
                <h3 className="s4">SKILLS</h3><br/>
                <div className='s1'>
                        <div className='s2'>
                            HTML< Progress percent={80}  />
                            CSS< Progress percent={85}  />
                            JAVASCRIPT< Progress percent={60}  />
                            REACT JS< Progress percent={65} />
                            BOOTSTRAP< Progress percent={50}  />
                        </div>

                        <div className='s3'>
                            ANT DESIGN< Progress percent={95}  />
                            MATERIAL UI< Progress percent={85}  />
                            ENGINE TESTING< Progress percent={95}  />
                            TEACHING< Progress percent={85} />
                            PRESENTATION< Progress percent={70}  />
                        </div>
                </div>
            </div>    
        </>
    )
}
export default Skillspage;