import React from 'react';
import ProjectSummary from "./ProjectSummary"
                      

                      //  prop
 const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
    {/* cycling through those projects if we have some*/}
    {projects && projects.map(project =>{
      return(
        /* for each project we passing an individual project */
        <ProjectSummary project={project} key={project.id} />
      )
    })}
    </div>
  );
};

export default ProjectList