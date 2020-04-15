import React from 'react'

 const ProjectSummary = ({project}) => {
  return (
    <div>
       <div className="card grey lighten-3 z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Post by the Lilia Warrier</p>
          <p className="grey-text">3rd September,2am</p>
        </div>
      </div>
    </div>
  )
}
export default ProjectSummary