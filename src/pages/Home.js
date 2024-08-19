import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2 style={{paddingTop: '2em'}}>Hi, my name is Rany Virakvuth</h2>
        <br />
        <div className='prompt'>
        <span>A Frontend, Backend developer with a passion for learning and creating.</span>
        < br/>
        <EmailIcon />
        <LinkedInIcon />
        <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>
                HTML, CSS, MaterialUI, ReactJS, Tailwind, Bootstrap, WordPress
              </span>
            </li>
            <li className='item'>
              <h2>Back-end</h2>
              <span>
                NodeJS, ExpressJS, Java Springboot, GraphQL, ApolloServer, MySQL, MongoDB
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>C, C++, C#, Typescript, Javascript, Java</span>
            </li>
          </ol>
      </div>
    </div>
  )
}

export default Home
