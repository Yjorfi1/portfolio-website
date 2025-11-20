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

  return (<>
          <h1 className='detailtitle'>{project.name}</h1>

    <section className='detailpage'>
      
      <section className='detailbox'>
          <p
      className='detailtext'
      dangerouslySetInnerHTML={{ __html: project.desc }}
    />
    <p
      className='detailtext2'
      dangerouslySetInnerHTML={{ __html: project.desc2 }}
    />
    </section>
<section className='detailphoto'>
      <img src={project.image} alt="Projectfoto" className='detailphoto'/>
      
      <img src={project.image2} alt="Projectfoto" className='detailphoto2' />
      </section>
      
     

    </section>
    <button onClick={() => navigate('/project') } className='detailbutton'>
        Terug naar project
      </button>
    </>
  );
}

export default ProjectDetail;