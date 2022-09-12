import './projects.scss'
import Socials from '../socials/socials'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <div className='projects-container'>
                <h1>Projects.</h1>
                <div className="box-container">
                    <div className="projects">
                        <div className="project-image"></div>
                        <div className="project-details">
                            <h3 className="project-name">EasyBank Landing Page</h3>
                            <div className="project-tools">
                                <span className="tools">HTML</span>
                                <span className="tools">CSS/SASS</span>
                                <span className="tools">Javascript</span>
                            </div>
                            <div className="project-description">
                                A Challange on FrontEnd Mentors on building a 
                                responsive Landing Page for  Easy bank.
                            </div>
                        </div>
                        <div className="btn-container">
                            <a href="https://ore-02.github.io/Easybank-Landing-Page/" target="_blank"><button className='resume'>Live Demo</button></a>
                            <a href="https://github.com/Ore-02/Easybank-Landing-Page" target="_blank"><button className='resume'>Source Code</button></a>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="project-image two"></div>
                        <div className="project-details">
                            <h3 className="project-name">Monsters Rolodex</h3>
                            <div className="project-tools">
                                <span className="tools">React</span>
                                <span className="tools">CSS/SASS</span>
                            </div>
                            <div className="project-description">
                                Monsters Rolodex is a Rolodex application 
                                which filters the Monsters card on search.
                            </div>
                        </div>
                        <div className="btn-container">
                            <a href="https://aliens-rolodex.netlify.app" target="_blank"><button className='resume'>Live Demo</button></a>
                            <a href="https://github.com/Ore-02/monsters-rolodex" target="_blank"><button className='resume'>Source Code</button></a>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="project-image three"></div>
                        <div className="project-details">
                            <h3 className="project-name">Yanle Clothing</h3>
                            <div className="project-tools">
                                <span className="tools">React</span>
                                <span className="tools">CSS/SASS</span>
                                <span className="tools">Firebase</span>
                            </div>
                            <div className="project-description">
                               Yanle Clothing is an E-commerce Application for 
                               buying clothings etc.
                            </div>
                        </div>
                        <div className="btn-container">
                            <a href="https://yanle-clothing.netlify.app/" target="_blank"><button className='resume'>Live Demo</button></a>
                            <a href="https://github.com/Ore-02/yanle-clothing/tree/master" target="_blank"><button className='resume'>Source Code</button></a>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="project-image four"></div>
                        <div className="project-details">
                            <h3 className="project-name">My Portfolio</h3>
                            <div className="project-tools">
                                <span className="tools">React</span>
                                <span className="tools">CSS/SASS</span>
                            </div>
                            <div className="project-description">
                                This is my Portfolio Website.
                            </div>
                        </div>
                        <div className="btn-container">
                            <a href="https://github.com/Ore-02/my-portfolio" target="_blank"><button className='resume'>Source Code</button></a>
                        </div>
                    </div>

                    <Link to='../contact' className='links'>
                        <p>Lets Talk</p>
                         <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path fill="#FFF" d="m20 32.042-1-1 10.333-10.334H7.958v-1.416h21.375L19 8.958l1-1L32.042 20Z"/></svg>
                    </Link>
                </div>
            </div>
        <Socials />
        </>
    )
}

export default Projects