import '../scss/about.scss'
import * as React from 'react';
import javascript from '../assets/icons/javascript.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import github from '../assets/icons/github.svg'
import materialui from '../assets/icons/materialui.svg'
import nodejs from '../assets/icons/nodejs.svg'
import react from '../assets/react.svg'
import redux from '../assets/icons/redux.svg'
import s3 from '../assets/icons/s3.svg'
import vercel from '../assets/icons/vercel.svg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function FormRow1() {
    return (
      <React.Fragment>
        
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name' >Javascript</span>
          <img className='moving-icons' height="100" width='100' src={javascript} alt='javascript'/>
       </div>
        </Grid>
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name'>Bootstrap</span>
        <img className='moving-icons' height="100" width='100' src={bootstrap} alt='bootstrap'/>
          </div>
        </Grid>
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name'>Github</span>

        <img className='moving-icons' height="100" width='100' src={github} alt='github'/>
        </div>
        </Grid>
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name'>Materialui</span>

        <img className='moving-icons' height="100" width='100' src={materialui} alt='materialui'/>
       </div>
        </Grid>
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name'>Nodejs</span>

        <img className='moving-icons' height="100" width='100' src={nodejs} alt='nodejs'/>
        </div>
        </Grid>
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name' >React</span>

       
      <img className='moving-icons' height="100" width='100' src={react} alt='react'/>
      </div>
        </Grid>
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name'>redux</span>

      
        <img className='moving-icons' height="100" width='100' src={redux} alt='redux'/>
      </div>
        </Grid>
        <Grid item xs={4} className='space'>
        <div className='scroll'>

        <span className='name' >s3</span>

        <img className='moving-icons' height="100" width='100' src={s3} alt='s3'/>
       </div>
        </Grid>
        <Grid item xs={4} className='space'>
          <div className='scroll'>
        <span className='name' >Vercel</span>

        <img  className='moving-icons' height="100" width='100' src={vercel} alt='vercel'/>
        </div>
        </Grid>
    
      </React.Fragment>
    );
  }

  
export default function About()
{
  ScrollReveal({
    reset:true,distance:'60px',duration:2500,delay:400
    })
    ScrollReveal().reveal('.skills',{delay:200,})
    ScrollReveal().reveal('.about',{delay:200,origin:'left'})
    ScrollReveal().reveal('.moving-icons',{delay:500})

    return(
        <>
          
<div className='skill-icon'>
  <div className='skills-icons'>
    <div className='skills'>MY SKILLS</div>
    <div className='skill'>
                <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3} className='space'>
          <FormRow1 />
        </Grid>
     
      </Grid>
    </Box>
    </div>
    </div>
    <div className="about">
              <div className='abouts'>
                <div className="heading">
                    <div className='h3'>Aboute Me</div>
                </div>
                    <div className='para'>
                    <p> I am 2022  passed out as i am passinated to develop my  made my dreams come true by knowing how the things work out, I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions. </p>

                </div>
                </div>
                </div>
    </div>
    
   
            </>
    )
}