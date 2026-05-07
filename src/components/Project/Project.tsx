import { Container } from "./styles"

import { ThreeDCardDemo } from "./ProjectCard";

import heliverse from '../../assets/project/Heliverse.png'
import StudyNotion from '../../assets/project/StdyNotion.png'
import Razorpay from '../../assets/project/Razorpay.png'
import RandomGif from '../../assets/project/RandomGif.png'
import TestiMonial from '../../assets/project/Testimonial.png'
import portfolio from '../../assets/project/Portfolio.png'
import TopCourses from '../../assets/project/Top Course.png'
import musicPlayer from '../../assets/project/MusicPlayer.png'
import CryptoTracker from '../../assets/project/CryptoTracker.png'
export function Project() {
  return (

    <Container id="project">
      <h2 className="font-bold" style={{color: '#23ce6b'}}>Projects</h2>
      <div className="projects">


        <ThreeDCardDemo 
          title={'StudyNotion – A Scalable MERN-Based Platform for Online Education'} 
          tech={'React.js,Tailwind CSS, Node.js, ExpressJS, mongoDB, Razorpay, Cloudinary'}
          image={StudyNotion}

          link={'https://study-notion-frontend-seven-chi.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'Crypto Tracker: Real-Time Cryptocurrency Price Tracker'} 
          tech={'React.js, Tailwind CSS, React icon'}
          image={CryptoTracker}

          link={'https://crypto-tracker-mauve-five.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'Spotify – A Modern Music Player App'} 
          tech={'React.js,  Tailwind CSS, CSS, React icon'}
          image={musicPlayer}
          link={'https://music-player-ui-9nxr.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'Top course – Find the Best Online Courses in One Place'} 
          tech={'HTML, CSS, Tailwind CSS, JavaScript, ReactJs'}
          image={TopCourses}
          link={'https://top-course-project-delta.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'heliverse Website Clone'} 
          tech={'HTML, CSS, JavaScript, React Js'}
          image={heliverse}
          link={'https://heliverse-sigma.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'TestiMonial Slider- Dynamic Testimonial Slider Component'} 
          tech={'HTML, CSS, ReactJS'}
          image={TestiMonial}
          link={'https://testimonial-slider1-project.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'Random GIF Generator – React App Using Giphy API Integration'} 
          tech={'HTML, CSS, Tailwind CSS, React js'}
          image={RandomGif}
          link={'https://random-gif-weld.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'Portfolio 2.0 - My personal portfolio website'} 
          tech={'React Js, Typescript, Tailwind CSS, Aceternity UI'}
          image={portfolio}
          link={'https://portfolio2-0-eight-alpha.vercel.app/'}
        />

        <ThreeDCardDemo 
          title={'RazorClone – A UI/UX Replica of Razorpay Homepage'} 
          tech={'HTML, Tailwind CSS'}
          image={Razorpay}
          link={'https://razorpay-clone-omega-rose.vercel.app/'}
        />

     </div>
    </Container>
  );
}