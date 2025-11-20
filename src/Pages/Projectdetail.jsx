import { useParams, useNavigate } from 'react-router-dom';
import projectdata from '../Projects.js';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectList = projectdata;
  const project = projectList.find(p => p.id === Number(projectId));

  if (!project) {
    return <div>project niet gevonden 😡</div>;
  }

  return (
    <section>
      <button onClick={() => navigate('/') }>
        ← Terug naar home
      </button>

      <h1>{project.name}</h1>
      <p>{project.desc}</p>
      <p>{project.desc2}</p>
      <img src={project.image} alt="Projectfoto" />
      <img src={project.image2} alt="Projectfoto" />
    </section>
  );
}

export default ProjectDetail;