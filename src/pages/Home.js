import Banner from '../components/Banner'
import About from '../components/About'
import Projects from '../components/Projects';
import './Home.css';
import '../components/Responsive.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
        <Banner/>
        <About/>
        <Projects/>
        <Footer/>
    </main>
  )
}

export default Home