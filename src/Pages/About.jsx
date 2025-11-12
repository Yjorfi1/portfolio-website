import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  skills  from '../Skills.js';
import skilllist from '../components/SkillList';

const about = () => {
     const navigate = useNavigate();
  const [skillSet, setSkillSet] = useState(skills);


    return ( 
        <div classname="aboutpage">
        <div classname="about-containers">
        <div className="About-container1">
            <img  className="aboutphoto" src="../public/img/foto.png" alt="foto" />
             <p className="container1-title">Yassir Jorfi</p>
             <p className="container1-text">Ik ben een hardwerkend persoon <br />die goed alleen en met anderen <br /> kan werken. ik heb een passie <br />voor design en coderen in het <br />algemeen</p>

<p className="contactlist">
⌂ 1234 abcd huisadres <br /> 
🕻  +31 6 42410639 <br />
🖂 9024527@student.zadkine.nl <br />
🌐 https://github.com/Yjorfi1/</p>
        </div>
        <div className="about-container2">
<p className="skilltitle">Mijn skills</p>

        </div>
        </div>
     <h2 className="AboutTitle">Over mij</h2>
     <p className="skilltext">Tijdens mijn tijd op het techniek college <br />
rotterdam heb ik veel verschillende dingen <br />
geleerd. Hier zijn een paar. ↓</p>
<div className='skill-list'>
    <div className='skills'><img src="../img/html.png" alt="html" /><p>HTML</p></div>
        <div className='skills'><img src="../img/css.png" alt="css" /><p>CSS</p></div>
    <div className='skills'><img src="../img/js.png" alt="javascript" /><p>Javascript</p></div>
    </div>

    <div className='skill-list2'>
    <div className='skills'><img src="../img/php.png" alt="php" /><p>PHP</p></div>
    <div className='skills'><img src="../img/react.png" alt="react" /><p>React</p></div>
    <div className='skills'><img src="../img/python.png" alt="python" /><p>Python</p></div>
</div>
</div>
       
     );
}
 
export default about;