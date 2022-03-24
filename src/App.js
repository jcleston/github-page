import logo_linux from './img/logo-linux.svg';
import logo_html5 from './img/logo-html5.svg';
import logo_css3 from './img/logo-css3.svg';
import logo_js from './img/logo-js.svg';
import logo_php from './img/logo-php.svg';
import logo_mysql from './img/logo-mysql.svg';
import logo_postgresql from './img/logo-postgresql.svg';
import logo_github from './img/logo-github.svg';
import logo_nodejs from './img/logo-nodejs.svg';
import logo_react2 from './img/logo-react2.svg';
import logo_react from './img/logo-react.svg';
import logo_bulma from './img/logo-bulma.png';
import './App.css';
import 'bulma/css/bulma.min.css';
import './modal-bulma'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="buttons">         
          <button className="js-modal-trigger button is-link is-outlined" data-target="modal-js-example">Sobre mim</button>
        </div>       

        <br />

        <p>Minhas Skills</p>
        <div className="columns">

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_php} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_mysql} className="App-logo-4" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_postgresql} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_github} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_linux} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_html5} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_css3} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_js} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>

        </div>
        <br />

        <p>Estou Aprendendo</p>
        <div className="columns">
          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_nodejs} className="App-logo-4" alt="logo Linux" />
            </a>
          </div>

          <div className="column">
            <a href="https://pt.wikipedia.org/wiki/Linux">
              <img src={logo_react2} className="App-logo-3" alt="logo Linux" />
            </a>
          </div>
        </div>

      </header>

      <footer className="App-footer">
        <div className="columns">
          <p>Desenvolvido com</p><br />
        </div>
        <div className="columns">
          <img src={logo_react} className="App-logo-girando" alt="logo React" /> + &nbsp; <img src={logo_bulma} className="App-logo-1" alt="logo Bulma" />
        </div>
      </footer>

      <div id="modal-js-example" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Sobre mim</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <p>Possuo curso Técnico em sistemas de informação, curso superior em análise e desenvolvimento de sistemas,
              com pós-graduação em banco de dados e engenharia de software,
              também possuo as certificações: Cobit Foundation Exam,
              Scrum Fundamentals Certified e
              Scrum Master Foudantion Certified.
            </p>
            <p>
              Iniciei minha carreira como programador em 2011,
              de lá pra cá tive a oportunidade de aprender e atuar em diversos projetos de desenvolvimento web e banco de dados,
              no momento atuo como Full Stack Developer no cargo de especialista na Tecnisys.
            </p>
          </section>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>

    </div>



  );
}

export default App;

