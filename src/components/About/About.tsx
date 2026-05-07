import { Container } from "./styles";
import Ramkumardehariya from "../../assets/photo.jpg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <div data-aos="fade-left" >
          <h2>About me</h2>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <p>
          Hi there! I'm Ramkumar Dehariya, a skilled MERN stack developer with expertise in React.js, Next.js, Node.js, MongoDB and Express.js.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I specialize in crafting dynamic web applications with seamless user experiences.</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Let's collaborate to bring your projects to life!</p>
        </div>

        <div data-aos="fade-left" data-aos-delay="400">
          <h3>Here are my main skills:</h3>
        </div>
        <div className="hard-skills">

          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="170">
              <img src={htmlIcon} alt="Html" />
            </div>
          </div>

          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="180">
              <img src={cssIcon} alt="Css" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="190">
              <img src={jsIcon} alt="JavaScript" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="140">
              <img src={typescriptIcon} alt="Typescript" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="160">
              <img src={nodeIcon} alt="Node" />
            </div>
          </div>

          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="190">
              <img src={boostrapIcon} alt="bootstrap" />
            </div>
          </div>

          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="190">
              <img src={tailwindIcon} alt="taiwind" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-image p-20 -mt-40">
        <div data-aos="fade-in-right" data-aos-delay="200">
          <img  src={Ramkumardehariya} alt="Ramkumar Dehariya" />
        </div>
      </div>
    </Container>
  )
}
