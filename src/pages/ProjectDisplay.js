import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Github from '@mui/icons-material/GitHub';

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt="project"/>
      <p>
        <b>Skills: </b> {project.skills}
      </p>
      <div className='icon'>
        <Facebook />
        <LinkedIn />
        <Github />
      </div>
    </div>
  )
}


export default ProjectDisplay
