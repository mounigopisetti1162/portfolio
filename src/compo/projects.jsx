import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import stack from '../assets/project/stack.png'
import url from '../assets/project/url-shrotner.png'
import stu from '../assets/project/stu-tea.png'
import '../scss/project.scss'
function Formrow()
{
    return(
        <React.Fragment>
<Grid item xs={6}>
            <div className='img-overlay '>
        <span className='project' >Stack-OverFlow</span>
          <img  className='image' src={stack} alt='javascript'/>
          <div className='overlay'>
            <a href='https://cute-boba-723607.netlify.app/' target='_blank' className='common-heading'>Stack Overflow</a>
          </div>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div className='img-overlay'>
        <span className='project'>URL-Shortner</span>
        <img className='image' src={url} alt='url-shrotner'/>
        <div className='overlay'>
            <a href='https://nimble-custard-91ad31.netlify.app/' target='_blank' className='common-heading'>URL- Shortner</a>
          </div>
          
        </div>
        </Grid>

        <Grid item xs={6}>
        <div className='img-overlay'>
        <span className='project'>Student-Teacher</span>

        <img className='image' src={stu} alt='student'/>
        <div className='overlay'>
            <a href='https://animated-sunburst-1a76c7.netlify.app/' target='_blank' className='common-heading'>Stack Overflow</a>
          </div>
        </div>
        </Grid>

        </React.Fragment>
    )
}
function Projects() {
    ScrollReveal({
        reset:true,distance:'60px',duration:2500,delay:400
        })
        ScrollReveal().reveal('.project-heading',{delay:200,origin:'right'})
        ScrollReveal().reveal('.project-para',{delay:300,origin:'left'})
        ScrollReveal().reveal('.containers',{delay:400,origin:'top'})
   
  return (

    <div className='project'>
        <div className='project-headding'>
        <h2 className='project-heading'> Latest work</h2>
        <p className='project-para'>
            These are the present work I have done by using all the skills which i have delepoed till now and also intrestted to develop new projects which are more advanced than these, an d the on going projects are still in process that will be added soon        </p>
        
        <div className='containers'>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
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