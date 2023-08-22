import resume from '../images/PRAVEENRAJ M_Jun-18.pdf';
import { NavLink } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
import {  Button, Space } from 'antd';


 function Headercom(){
    return(
        <>
            <div className="h1">
                <div className="h2"><NavLink to='./' className='a'>PRAVEENRAJ</NavLink> </div>
                <div>
                    <div className="h3">
                        <div><NavLink className='a' to='/Education'> Education</NavLink></div>
                        <div><NavLink className='a' to='/Skills'>Skills</NavLink></div>
                        <div><NavLink className='a' to='/Experience'>Experience</NavLink></div>
                        <div><NavLink className='a' to='/Profile'>Profile</NavLink></div>
                        <div><NavLink className='a' to='/Portfolio'>Portfolio</NavLink></div>
                        <div><NavLink className='a' to='/Contact'>Contact</NavLink></div>
                    </div>
                </div>
            </div>

            <div className="h4"> 
                <div className="h7">
                    <div className="h5">HI, I AM</div>
                    <div className="h9">PRAVEENRAJ.</div><br/>
                    <div className="h10">FULL STACK WEB DEVELOPER</div><br/><br/>
                    <div className="h8">
                    <Space direction="vertical" >
                        <Button href={resume}  className='h6' type="primary" shape="round" icon={<DownloadOutlined />} >
                            Download Resume
                        </Button>
                    </Space>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Headercom;
