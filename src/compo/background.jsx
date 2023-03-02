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

    window.addEventListener('scroll',function()
    {
        var value=window.scrollY;
        bg.style.top=value * 0.5+ 'px'
        moon.style.left= -value * 0.5+ 'px'
        mountain.style.top= -value * 0.15 + 'px'
        road.style.top=value * 0.5+ 'px'
        text.style.top=value*1+'px'

    })
    const onScroll=()=>{

    }
    return(

    <>
     <nav id="navbar-example2" className="navbar px-3 mb-3">
  <a className="navbar-brand" href="#">MOUNI</a>
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
    {/* <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li> */}
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example  p-3 rounded-2" tabindex="0">
  

  <h4 id="scrollspyHeading1"></h4>
<div className='typing'>
    <div className='wrapper'>
        <div className='static-txt'></div>
        <ul className='dynamic-txt'>
            <li><span>Hi, I am mouni</span></li>
            <li><span>I am a frontend Developer</span></li>
            <li><span>I am a  Backend-Developer</span></li>
            <li><span>and belive to achive more</span></li>
        </ul>

    </div>

</div>
<div className='icons'>
  <div className='icon'>
    <a href='https://github.com/mounigopisetti1162' target='_blank'>
  <GitHubIcon sx={{ color: 'white', fontSize: 50 }} onClick={click1}/></a>
  <a href='https://www.linkedin.com/in/mouni-chinni-973712171/' target='_blank'>
  <LinkedInIcon sx={{ color: 'white', fontSize: 60 }}/> </a>
  <a href={resume} download='resume'>
  <FolderSpecialIcon sx={{ color: 'white', fontSize: 60 }}/></a>
   </div>
  
</div>

        
    <section onScroll={onScroll}>
        <img src="bg.jpg" id='bg'/>
        <img src="moon.png" id='moon'/>
        <img src="mountain.png" id='mountain'/>   
        <img src="road.png" id='road'/>
        <h2 id='text' >Mounis's Portfolio</h2>
    </section>

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