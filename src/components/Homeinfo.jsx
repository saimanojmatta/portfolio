import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox=({text,btnText,link})=>{
    return(
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img  src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
            </Link>
        </div>
    )
}
const renderContent={
    1:(
        
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, l'm<span className="font-semibold mx-2 text-white">Manoj</span>
            👋
            <br/>
            A Web developer from India 
        </h1>
    ),
    2:(
        <InfoBox
          text="Driven by passion and curiosity, I've independently explored and mastered various technologies, building a strong foundation for future endeavors"
          link='/about'
          btnText='Learn more'
        />
        ),
    3:(     
        <InfoBox
            text="Always seeking to learn and grow, I've tackled diverse projects, pushing my boundaries and exceeding expectations.Curious
            about the impact?"
            link='/projects'
            btnText='visit my portfolio'
        />
        
    ),
    4:(
        <InfoBox
            text="Let's build something amazing together. Contact me today."
            link='/contact'
            btnText="Let's talk"
        />
        
    ),
        
}
    
const Homeinfo = ({CurrentStage}) => {
    
  return renderContent[CurrentStage]||null
    
  
}
export default Homeinfo