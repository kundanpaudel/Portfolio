import './about.css'
import AboutPicture from '../../assets/kpabout.jpg'
import Resume from '../../assets/resume.pdf'
import {MdCloudDownload} from 'react-icons/md'
import Cards from '../../components/Cards'
import data from './data'

const About = () => {
  return (
    <section id="about">
      <div className='container about__container'>
        <div className="about__left">
          <div className="about__photo">
            <img src={AboutPicture} alt = "About"/>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Cards key = {item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Cards>
              ) )
            }
          </div>
          <p>
          Hello! I'm Kundan Paudel, a recent graduate with a Bachelor's degree in Computer Science. 
          I'm thrilled to embark on my journey in the world of software development. 
          During my academic journey, I developed a strong foundation in coding, problem-solving, and teamwork.
          </p>
          <br></br>
          <p>
          My journey is just beginning, and I'm excited to collaborate, learn, and contribute to innovative projects. 
          Please explore my portfolio to see some of my recent work and get in touch if you'd like to connect or collaborate on exciting ventures. Let's code the future together!"
          </p>
          <a href={Resume} download className='btn primary'>Download Resume<MdCloudDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About