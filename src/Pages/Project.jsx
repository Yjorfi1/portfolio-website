import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectdata from '../Projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => {
    
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState(projectdata);

  const goToDetail = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

    return (     
    <>
    <p className='project-title'>Projecten</p> 

        <section className='projectbody'>
    {projectList.map(project => (
        <ProjectCard
          key={project.id}
          projectprop={project}
          onShowDetail={goToDetail}
        />
      ))}

    </section>
<br />
</>
    );
}
 
export default Projects;