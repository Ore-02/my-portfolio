import './about.scss'
import Socials from '../socials/socials'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
        <div className='about-container'>
        <h1>About Me.</h1>
        <div className="picture"></div>
        <p>Hi, My name is Ayandele Oreoluwa, 
        an aspiring Full-stack Web Developer with 
        knowlege on the Front-end of the Web. 
        I make use of tools like: HTML, CSS/SASS,
        Javascript, React and Other frameworks, 
        I am seeking for an entry-level or internship 
        opportunity where I can continue to learn and 
        grow my skills as a web developer. Feel 
        free to connect with me, my DMs is always open!
        </p>

        <Link to='../projects' className='links'>
            <p>See Projects</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path fill="#FFF" d="m20 32.042-1-1 10.333-10.334H7.958v-1.416h21.375L19 8.958l1-1L32.042 20Z"/></svg>
            </Link>
            
        </div>
        <Socials />
        </>
    )
}

export default About