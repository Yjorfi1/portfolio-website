const ProjectCard = ({projectprop,  onShowDetail}) => {
    return ( 
        <section>
            <img src={projectprop.image} alt="Projectfoto" />
            <h1>{projectprop.name}</h1>           
             <p>{projectprop.desc}</p>
             <p>{projectprop.skills}</p>
             <button onClick={() => onShowDetail(projectprop.id)}>Meer info</button>
        </section>
     );
}
 
export default ProjectCard;