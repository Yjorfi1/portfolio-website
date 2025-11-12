import skills from "../Skills";
const skilllist = () => {
    return ( <div className="skill-list">
                   <img className="skillimage" src={skills.image}/>
<p className="skillnames">{skills.name}</p>
    </div> );
}
 
export default skilllist;