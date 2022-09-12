import Socials from '../socials/socials'
import './contacts.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <div className='contacts-container'>
                <h1>Contact.</h1>
                <p>Get in touch or send me an email directly on <strong>ayandeleoluwafemi@gmail.com.</strong></p>

                <div className="cont-container">
                    <div className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path fill="#E2A176" d="M18,21h2c1.65,0,3-1.35,3-3V9.92l-6,4.68V20C17,20.552,17.448,21,18,21z M19.5,3c-0.79,0-1.54,0.26-2.16,0.74L17,4.01v8.06	l6-4.69V6.5C23,4.57,21.43,3,19.5,3z M9,5.57v8.06l2.385,1.86c0.362,0.282,0.869,0.282,1.23,0L15,13.63V5.57l-3,2.34L9,5.57z M1,18	c0,1.65,1.35,3,3,3h2c0.552,0,1-0.448,1-1v-5.4L1,9.92V18z M4.5,3C2.57,3,1,4.57,1,6.5v0.88l6,4.69V4.01L6.66,3.74	C6.04,3.26,5.29,3,4.5,3z"></path></svg>
                        <h3>Email</h3>
                        <h4>ayandeleoluwafemi@gmail.com</h4>
                        <p><a href="mailto:ayandeleoluwafemi@gmail.com" target='_blank'>Send a message</a></p>
                    </div>
                    <div className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18"><title>Twitter</title><path fill="#E2A176" d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
                        <h3>Twitter</h3>
                        <h4>@dradix001</h4>
                        <p><a href='https://twitter.com/dradix001' target='_blank'>Send a message</a></p>
                    </div>
                    <div className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50"><title>Linkedin</title><path fill='#E2A176' d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path></svg>
                        <h3>Linkedin</h3>
                        <h4>Ayandele Oreoluwa</h4>
                        <p><a href='https://www.linkedin.com/in/oreoluwa-ayandele-51ba931b9/' target='_blank'>Send a message</a></p>
                    </div>
                </div>

                <Link to='../' className='links'>
                    <p>Go to Home</p>
                </Link>
          
               {/* <form action="mailto:oluwafemiayandele1@gmail.com" method="POST" enctype="text/plain" className='form-container'>
                    <input className='form-input' name="Name" required type="text" placeholder='Name'/>
                    <input className='form-input' name="Email" required type="email" placeholder='Email'/>
                    <textarea className="message"name="Message" required class="form-control" rows="5" placeholder="Enter your message"></textarea>
                    <button className='resume' type='submit'>Send Message</button>
               </form> */}
               
            </div>
        <Socials />
        </>
    )
}

export default Contact