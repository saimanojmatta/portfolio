import CTA from '../components/CTA'
import {skills} from '../constants'
import { Mylinkedin,  whatsapp } from '../assets/icons'
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello,I'm{" "}  
        <span className="blue-gradient_text font-semibold drop-shadow">
               {" "}
               Manoj
        </span>
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        My enthusiasm for web development stems from my fascination with creating interactive and visually appealing user experiences. I believe in the power of technology to connect and engage people, and I'm excited to contribute my skills to building impactful and user-friendly web applications.
        </p>
        <p>For a detailed overview of my skills and achievements, you can find my resume down and connect with me on Social Media </p>
      </div>
      <div className='m-5 flex gap-20 '>
        <a href="https://drive.google.com/file/d/1xB4FWT_nC5PdzstgvfOX4Wu2n0UKPpy0/view" target='_blank' className='btn'>
          Resume
          </a>
          <div className='flex gap-6 justify-center items-center'>
            <a href="https://www.linkedin.com/in/sai-manoj-07114b238/" target='blank'>
              <img src={Mylinkedin} alt="" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=919573484479" target='blank'>
              <img src={whatsapp} alt="" />
            </a>
            

          </div>

      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My skills</h3>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill)=>{
          return(
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img className='w-1/2 h-1/2 object-contain'
                  src={skill.imageUrl} alt={skill.name} />
                </div>
            </div>
          )
        })}
      </div>
      </div>
      <hr  className="border-slate-200"/>
      <CTA/>

    </section>
  )
}
export default About