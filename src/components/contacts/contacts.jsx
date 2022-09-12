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
                        <h4>ayandeleoluwafemi@gmail</h4>
                        <p><a href="mailto:ayandeleoluwafemi@gmail.com" target='_blank'>Send a message</a></p>
                    </div>
                    <div className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18"><title>Twitter</title><path fill="#E2A176" d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
                        <h3>Twitter</h3>
                        <h4>@dradix001</h4>
                        <p><a href='https://twitter.com/dradix001' target='_blank'>Send a message</a></p>
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