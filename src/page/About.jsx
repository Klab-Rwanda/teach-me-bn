import "../css/About.css";
import data from './data.js';
import { FcExpired } from 'react-icons/fc';
import { FcBiohazard } from 'react-icons/fc';
function About() {
  return (
    <section>
    <div className='container' id="about">
       <p className='about_container'>The future of education starts with our teachers</p>
      <div className="cardds">
        {data.map((card, index) => (
          <div className="small_card_teachers" key={index}>
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
    </section>
  )
}

export default About;
