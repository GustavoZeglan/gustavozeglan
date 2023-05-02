import Foto from '../assets/images/Foto.jpg';
import Pdf from '../assets/pdf/Currículo.pdf';
import './About.css';


const About = () => {
  return (
    <section className="about">

        <div className="text">
            <h1>Sobre mim</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam in corrupti veniam. Porro vitae id a
                soluta voluptates reprehenderit. Distinctio molestias similique non tempore obcaecati soluta nulla hic
                numquam repellendus!</p>

            <a href={Pdf} className="btn" target="_blank">Currículo</a>

        </div>

        <div className="img">
            <img src={Foto} alt=""/>
        </div>
    </section>
  )
}

export default About