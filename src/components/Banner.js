import programming2 from '../assets/images/Programming2.gif';
import './Banner.css';


const Banner = () => {
  return (
    <section className="banner">

        <div className="banner-content">
            <div className="text">
                <h1>Olá, Lorem ipsum</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatem recusandae aspernatur aut
                    voluptatibus fugiat autem dolores reiciendis esse, aliquid exercitationem cum fuga ab numquam
                    consequatur amet incidunt obcaecati. Enim.</p>
            </div>

            <div className="img">
                <img src={programming2} alt=""/>
            </div>

        </div>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f3f4f5" fillOpacity="1"
                d="M0,224L48,224C96,224,192,224,288,229.3C384,235,480,245,576,218.7C672,192,768,128,864,117.3C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>


    </section>
  )
}

export default Banner