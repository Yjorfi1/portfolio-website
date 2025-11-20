const ProjectCard = ({projectprop,  onShowDetail}) => {
    return ( 
        <section className="projectsbody">
            <img src={projectprop.image1} alt="Projectfoto" className="Projectfoto" />
            <p className="project-names">{projectprop.name}</p>           
         
             <button className="projectbutton" onClick={() => onShowDetail(projectprop.id)}>Details</button>
        </section>
     );
}
 
export default ProjectCard;