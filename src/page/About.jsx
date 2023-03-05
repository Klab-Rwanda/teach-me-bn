import "../css/About.css";
import data from './data.js';
import { FcExpired } from 'react-icons/fc';
import { FcBiohazard } from 'react-icons/fc';
function About() {
  return (
    <div className='container'>
       <p className='about_container'> OUR BEST ONE  MENTOR </p>
      <div className="cards">
        {data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} alt='connection failed '/>
            <h4>{card.name}</h4>
            <p>{card.description}</p>
            <div className='hours'>
              <p className=''><FcExpired/>{card.hours} hours</p>
              <p className=''><FcBiohazard/>{card.views}(23 views)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
