import './about.css'
import Talking from '../images/Talking.jpg'
const About = () => {
    return <div className="About">
        <div className='About-Row-1'>
            <div className='About-COL-1'>
                <p>A dynamic and results-driven Lead Full Stack Developer with 10 years of experience in leading and mentoring development teams.</p>
                <p>Expertise in React.js, C#, .NET Core API, SQL Server, TypeScript, and JavaScript. Proven ability to drive innovation, improve development processes, and deliver high-quality software solutions that meet business objectives.</p>
                <p> Strong communication and interpersonal skills, with a passion for mentoring and fostering the growth of junior developers.</p>
            </div>
            <div className='About-COL-2'>
                <img src={Talking} alt="profile" className="TalkingPic" ></img>
            </div>
        </div>

    </div>;
};

export default About;
