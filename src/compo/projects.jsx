import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import stack from '../assets/project/stack.png'
import url from '../assets/project/url-shrotner.png'
import stu from '../assets/project/stu-tea.png'
import infi from '../assets/project/infi.png'
import javascript from '../assets/icons/javascript.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import github from '../assets/icons/github.svg'
import materialui from '../assets/icons/materialui.svg'
import nodejs from '../assets/icons/nodejs.svg'
import react from '../assets/react.svg'
import redux from '../assets/icons/redux.svg'
import s3 from '../assets/icons/s3.svg'
import vercel from '../assets/icons/vercel.svg'
import css from '../assets/icons/css.jpg'
import socket from '../assets/icons/socket.png'
import html from '../assets/icons/html.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../scss/project.scss'
import { useEffect } from 'react';

function Formrow()
{
    return(
        <React.Fragment className='projects-all'>
          
   <Grid item xs={6} className='gride'>
        <span className='project'>InFi Chat</span>
        <div className='img-overlay'>

        <img className='image' src={infi} alt='student'/>
        <div className='overlay'>

          <div className='inside'>

            <div className='in-names'>
            <div className='in-name'>
         
            <a href='https://magnificent-kashata-c33ff9.netlify.app/' target='_blank' className='common-heading'>  <RemoveRedEyeIcon fontSize='large' 
           /> Infi Chat</a>
           <a href='https://github.com/mounigopisetti1162/capstone' target='_blank' className='common-heading'>
            <GitHubIcon fontSize='large' /></a>
            </div>
            </div>
          </div>


            <div className='inside-icons'>
              <div className='in-icons'>

             
            <img className='m-icons' height="30" width='30' src={javascript} alt='javascript'/>
            <img className='m-icons' height="30" width='30' src={css} alt='javascript'/>
            <img className='m-icons' height="30" width='30' src={socket} alt='javascript'/>
            <img className='m-icons' height="30" width='30' src={bootstrap} alt='javascript'/>
            </div>
            </div>
          </div>
        </div>
        </Grid>

<Grid item xs={6} className='gride'>
        <span className='project' >Stack-OverFlow</span>
            <div className='img-overlay '>
          <img  className='image' src={stack} alt='javascript'/>
          <div className='overlay'>
          <div className='inside'>

<div className='in-names'>
<div className='in-name'>

<a href='https://cute-boba-723607.netlify.app/' target='_blank' className='common-heading'> <RemoveRedEyeIcon fontSize='large' 
/>Stack Overflow </a>
<a href='https://github.com/mounigopisetti1162/stack-webcode' target='_blank' className='common-heading'>
<GitHubIcon fontSize='large' /></a>


</div>
</div>
</div>
<div className='inside-icons'>
              <div className='in-icons'>

             
          
            <img className='m-icons' height="30" width='30' src={css} alt='javascript'/>
         
            <img className='m-icons' height="30" width='30' src={bootstrap} alt='javascript'/>
            </div>
            </div>


            
          </div>
        </div>
        </Grid>

        <Grid item xs={6} className='gride'>
        <span className='project'>URL-Shortner</span>
        <div className='img-overlay'>
        <img className='image' src={url} alt='url-shrotner'/>
        <div className='overlay'>
        <div className='inside'>

<div className='in-names'>
<div className='in-name'>

<a href='https://nimble-custard-91ad31.netlify.app/' target='_blank' className='common-heading'><RemoveRedEyeIcon fontSize='large' 
/>URL- Shortner</a>
<a href='https://github.com/mounigopisetti1162/stack-webcode' target='_blank' className='common-heading'>
<GitHubIcon fontSize='large' /></a>


</div>
</div>
</div>
<div className='inside-icons'>
              <div className='in-icons'>

             
          
            <img className='m-icons' height="50" width='50' src={nodejs} alt='javascript'/>
         
            <img className='m-icons' height="50" width='50' src={vercel} alt='javascript'/>
            </div>
            </div>

            
          </div>
         
        </div>






        </Grid>

        <Grid item xs={6} className='gride'>
        <span className='project'>Student-Teacher</span>
        <div className='img-overlay'>

        <img className='image' src={stu} alt='student'/>
        <div className='overlay'>
        <div className='inside'>

<div className='in-names'>
<div className='in-name'>

<a href='https://animated-sunburst-1a76c7.netlify.app/' target='_blank' className='common-heading'> <RemoveRedEyeIcon fontSize='large' 
/>Student-Teacher </a>
<a href='https://github.com/mounigopisetti1162/stack-webcode' target='_blank' className='common-heading'>
<GitHubIcon fontSize='large' /></a>


</div>
</div>
</div>
<div className='inside-icons'>
              <div className='in-icons'>

             
          
            <img className='m-icons' height="30" width='30' src={react} alt='javascript'/>
         
            <img className='m-icons' height="30" width='30' src={materialui} alt='javascript'/>
            </div>
            </div>
            
          </div>
        </div>
        </Grid>

     

        </React.Fragment>
    )
}
function Projects() {
  useEffect(()=>{


    ScrollReveal({
        reset:true,distance:'60px',duration:3000,delay:400
        })
        ScrollReveal().reveal('.project-heading',{delay:300,origin:'right'})
        ScrollReveal().reveal('.project-para',{delay:300,origin:'left'})
        ScrollReveal().reveal('.containers',{delay:400,origin:'top'})
      },[])
  return (

    <div className='project'>
        <div className='project-headding'>
        <h2 className='project-heading'> Latest work</h2>
        <p className='project-para'>
            These are the present work I have done by using all the skills which i have delepoed till now and also intrestted to develop new projects which are more advanced than these, an d the on going projects are still in process that will be added soon        </p>
        
        <div className='containers'>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={9}>
          <Formrow />
        </Grid>
     
      </Grid>
    </Box>
        

                </div>
                
                </div>
            </div>
        
        
    

  )
}

export default Projects 