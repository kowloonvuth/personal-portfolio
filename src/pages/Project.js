import React from 'react';
import {ProjectList} from "../helpers/ProjectList";
import ProjectItem from '../components/ProjectItem';

import "../styles/Projects.css";

function Project() {
  return (
    <div className='projects'>
      <h1> About my Personal Projects </h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image}/>
          );
        })}
      </div>
    </div>
  )
}

export default Project;
