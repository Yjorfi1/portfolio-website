import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectdata from '../Projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => {
    
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState(projectdata);

  const goToDetail = (projectId) => {
    navigate(`/project/${projectId}`);
  };

    return ( 
        <section>
    <h1>Projecten</h1> 
    {projectList.map(project => (
        <ProjectCard
          key={project.id}
          projectprop={project}
          onShowDetail={goToDetail}
        />
      ))}

    </section>


    );
}
 
export default Projects;