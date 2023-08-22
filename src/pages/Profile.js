import {LinkedinOutlined} from '@ant-design/icons';
import {GithubOutlined} from '@ant-design/icons';
import {MailOutlined} from '@ant-design/icons';

function Profilepage(){
    return(
        <>
         <div className='p5'>
          <h3 className="s4">PROFILE</h3><br/>
          <div className='p1'>
            <a href='https://www.linkedin.com/in/praveenraj-m-85a396151'> <LinkedinOutlined /> Linkedin</a>
            <a href='https://github.com/9500719280' > <GithubOutlined /> Gitub </a>
            <a href='mailto:praveenraj9055@gmail.com' ><MailOutlined />Email </a>
          </div>
         </div>
        
        </>
    )
}
export default Profilepage;