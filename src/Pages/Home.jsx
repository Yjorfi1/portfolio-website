import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';


const Home = () => {
      const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

    return (  
      <> <div className="home-container">
            <img className="homephoto" src="./img/foto.png" alt="foto van mij" />
            <h1>Hoi!</h1>
            <p className="hometoptext">Mijn naam is Yassir Jorfi</p>
            <p className="hometext">Ik ben een front-end developer <br />die een passie heeft voor design</p>
            <button><Link to="/contact" ><p className="contactbutton">Contact</p></Link></button>
        </div>
        <p>{count} keer geteld</p></> 
    );
}
 
export default Home;