import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn ,faGithub } from '@fortawesome/free-brands-svg-icons'
import './404.css'

export const Pag404 = () => {
  return (
    <>
        <main>
        <div class="pag404">
            <h1>Ocorreu um erro</h1>
            <h3>Página não encontrada</h3>
        </div>
        </main>
        <footer class="footer" id="footer">
        <h3>Gustavo Zeglan <span>Portfolio</span></h3>

        <div class="contacts">
            <a href=""><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href=""><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        
        <p>© 2023 Gustavo Zeglan</p>
        
        </footer>
    </>
  )
}
