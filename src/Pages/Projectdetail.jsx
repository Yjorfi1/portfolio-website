import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectdata from '../Projects.js';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState(projects);
  
  const project = projectList.find(p => p.id === Number(projectId));

  if (!project) {
    return <div>project niet gevonden 😡</div>;
  }

    return (
    <>
    <section>
      <button onClick={() => navigate('/')}>
        ← Terug naar home
      </button>
      
      <h1>{productprop.name}</h1>
      <p>Beschrijving: {productprop.description}</p>
    </section>
 

    </>  );
}
 
export default ProjectDetail;