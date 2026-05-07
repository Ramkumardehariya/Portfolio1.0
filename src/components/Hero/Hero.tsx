import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'
import mail from '../../assets/mail.png'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <div data-aos="fade-in-up" data-aos-delay="0">
          <p className="flex text-4xl"> Hello &nbsp; <img src={Hello} alt="Hello" width="20px"/> &nbsp;, I'm</p>
        </div>
        <div data-aos="fade-in-up" data-aos-delay="200">
          <h1>Ramkumar Dehariya</h1>
        </div>
        <div data-aos="fade-in-up" data-aos-delay="400">
          <h3 className="text-5xl">Full Stack Developer</h3>
        </div>

        <br />

        <div data-aos="fade-in-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </div>
        
        <div data-aos="fade-in-up" data-aos-delay="1000">
        <div className="social-media"><a
          href="https://www.linkedin.com/in/ramkumar-dehariya-16a242218/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
          </a>
            <a
              href="https://github.com/Ramkumardehariya"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="mailto:ramkumardehariya26@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mail} alt="telegram" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B917489629277&text=Hello+Ramkumar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="mailto:ramkumardehariya26@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
            <a
              href="https://www.instagram.com/rammehramehra/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="telegram" />
            </a>
        </div>
        </div>

      </div>
     

      <div className="hero-image">
        <div data-aos="fade-in-right" data-aos-delay="1000">
          <img src={Illustration} alt="Ilustração" />
        </div>
      </div>
     
    </Container>

  )
}