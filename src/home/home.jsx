import { Link } from 'react-router-dom';
import Socials from '../components/socials/socials';
import './home.scss'
import pdf from "../assests/oreoluwa_resume.pdf"

const Home = () => {

    return (
        <div className='container'>

         <div className='home-container'>
            <h1>Hello,</h1>
            <h1>I'm Ayandele Oreoluwa</h1>
            <h3> A Web Developer</h3>
    
            <div className='port-pic'>
            </div>
            <button className='resume'>
            <a href={pdf} download>
                Download Resume</a></button>
        
            <Link to='./about/' className='links'>
            <p>See More About Me</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path fill="#FFF" d="m20 32.042-1-1 10.333-10.334H7.958v-1.416h21.375L19 8.958l1-1L32.042 20Z"/></svg>
            </Link>
      </div>
      <Socials/>
        </div>
       
    )
}

export default Home;