import Tela from '../assets/images/tela 1.png';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">

        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#23425f" fillOpacity="1"
              d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,218.7C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>

        <div className="content">
            <h2>Projetos</h2>

        <div className="project-content">
            <div className="col">
                <img src={Tela} alt=""/>
                <p>Teste</p>
            </div>
            <div className="col">
                <img src={Tela} alt=""/>
                <p>Teste</p>
            </div>
        </div>
        
        </div>

    </section>
  )
}

export default Projects