import React from 'react';
import ProjectSummary from "./ProjectSummary"
import {Link} from "react-router-dom"
                      

                      //  prop
 const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
    {/* cycling through those projects if we have some*/}
    {projects && projects.map(project =>{
      return(
        /* for each project we passing an individual project */
        <Link to={"/project/" + project.id} key={project.id}>
        <ProjectSummary project={project}  />
        </Link>
      )
    })}
    </div>
  );
};

export default ProjectList