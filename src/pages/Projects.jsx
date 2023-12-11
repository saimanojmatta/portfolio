import { Link } from 'react-router-dom'
import {projects} from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">Projects</span>
      </h1>
      <p className="text-slate-500 mt-2 leading-relaxed">
      These projects are more than just lines of code; they represent my passion for creating meaningful and impactful solutions. Many of them are open-source, meaning anyone can explore the codebase and contribute to their growth. If any of these resonate with you, I invite you to dive deeper and share your ideas for further enhancements - your collaboration is highly valued!
     
      </p>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project)=>{
          return(
            <div className='lg:w-[400px] w-full ' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className= {`btn-back rounded-xl ${project.theme}`}/>
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img src={project.iconUrl} alt='threads' className='w-1/2 h-1/2 object-contain' />

                  </div>
              </div>
              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500 '>{project.description}</p>
                <div className='mt-5 flex items-center  gap-2 font-poppins'>
                  <Link to ={project.code} target="_blank" rel='noopener noreferrer ' className='font-semibold text-blue-600'>
                    <button className='btn mr-3'>Code🧑‍💻</button>
                  </Link>
                  <Link to ={project.link} target="_blank" rel='noopener noreferrer ' className='font-semibold text-blue-600'>
                    Live Link
                  </Link>
                  <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </div>
                
              </div>
            </div>
          )
        })}
      </div>
      <hr className='border-slate-200' />
      <CTA/>
    
    </section>
  )
}
export default Projects