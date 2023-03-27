import '../scss/style.scss'
// import {Navigate, useNavigate} from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import resume from '../resume/Resume.pdf'
import About from './About';
import Contact from './contact';
import Projects from './projects';
export default function Background()
{
  // const nav=useNavigate()
  const click1=()=>{
    // console.log("fdgkjdfn")
   <link rel="stylesheet" href="www.google.com" />
  }
  const onScroll=()=>{

  }

    window.addEventListener('scroll',function()
    {
        var value=window.scrollY;
        bg.style.top=value * 0.5+ 'px'
        moon.style.left= -value * 0.5+ 'px'
        mountain.style.top= -value * 0.15 + 'px'
        road.style.top=value * 0.5+ 'px'
        text.style.top=value*1+'px'

    })
   
    return(

    <>
    <div className="nav">

   
     <nav id="navbar-example2" className="navbar px-3 mb-3">
  <a className="navbar-brand" href="#">MOUNI Gopisetti</a>
  <ul className="nav nav-pills">
    <li class="nav-item">
      <a className="nav-link" href="#scrollspyHeading1">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Skills</a>
    </li>
    
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading3">Project</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading4">Contact</a>
    </li>
   
  </ul>
</nav>
</div>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example  p-3 rounded-2" tabindex="0">
  

  <h4 id="scrollspyHeading1"></h4>
<div className='typing'>
    <div className='wrapper'>
        <ul className='dynamic-txt'>
            <li><span className='list'>Hi, I am mouni</span></li>
            <li><span className='list'>I am a frontend Developer</span></li>
            <li><span className='list'>I am a  Backend-Developer</span></li>
            <li><span className='list'>and belive to achive more</span></li>
        </ul>

    </div>

</div>
<div className='icons'>
  <div className='icon'>
    <a href='https://github.com/mounigopisetti1162' target='_blank'>
  <GitHubIcon className='sym' sx={{ color: 'white', fontSize: 40 }} />GitHub</a>
  <a href='https://www.linkedin.com/in/mouni-chinni-973712171/' target='_blank'>
  <LinkedInIcon className='sym' sx={{ color: 'white', fontSize: 40 }}/>LinkedIn </a>
  <a href={resume} download='resume'>
  <FolderSpecialIcon className='sym' sx={{ color: 'white', fontSize: 40 }}/> Resume</a>
   </div>
  
</div>

     <div className="section">
    <section >
        <img src="bg.jpg" id='bg'/>
        <img src="moon.png" id='moon'/>
        <img src="mountain.png" id='mountain'/>   
        <img src="road.png" id='road'/>
        <div id='text' >Mounis's Portfolio</div>
    </section>
      </div>   

    <h4 id="scrollspyHeading2"></h4>
    <About/>
    <h4 id="scrollspyHeading3"></h4>
    <Projects/>

    <h4 id="scrollspyHeading4"></h4>
    <Contact/>


  </div>
        </> 
    )
}