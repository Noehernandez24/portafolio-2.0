import "./App.css";
import heroImg from "./assets/hero.jpg";
import avatar from "./assets/avatar.png";
import reactLogo from "./assets/react-logo.webp";
import jsLogo from "./assets/js-logo.jpg";
import cssLogo from "./assets/css-logo.webp";
import reduxLogo from "./assets/redux-logo.jpg";
import routerLogo from "./assets/react-router-logo.jpg";
import boostrapLogo from "./assets/bootstrap-logo.jpg";
import proyecto1 from "./assets/proyecto-1.png";
import proyecto2 from "./assets/proyecto-2.png";
import proyecto3 from "./assets/proyect-3.png";
import proyecto4 from "./assets/proyecto-4.png";
import PortfolioDetail from "./components/PortfolioDetail";

function App() {
  return (
    <div className="App">
      <main>
        <header className="hero">
          <img src={heroImg} alt="" className="hero-img" />
          <nav className="nav">
            <h1 className="nav-logo">Noe | Hernandez</h1>
            <span className="nav-hamburger">
              <i className="bx bx-menu hamburger-icon"></i>
            </span>
            <div className="nav-links">
              <a href="#" className="nav-link nav-link--special">
                INICIO
              </a>
              <a href="#" className="nav-link">
                SOBRE MÍ
              </a>
              <a href="#skills" className="nav-link">
                SKILLS
              </a>
              <a href="#" className="nav-link">
                CONTACTO
              </a>
              <a href="#" className="nav-link">
                PROYECTOS
              </a>
            </div>
          </nav>

          <section className="main-section container">
            <div className="main-texts">
              <h1 className="main-title">
                Hola, soy <span>Noe Hernandez</span>
              </h1>
              <p className="main-paragraph">
                Desarrollador web FRONTEND <br /> y futuro programador
                FULLSTACK!
              </p>
              <div className="main-social">
                <a href="#" className="social-link">
                  <i className="bx bxl-linkedin bx-md"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bx bxl-github bx-md"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bx bxl-twitter bx-md"></i>
                </a>
              </div>
            </div>

            <div className="main-image-container">
              <img className="main-avatar" src={avatar} alt="" />
            </div>
          </section>
        </header>
      </main>

      <section className="about-me container" id="about-me">
        <div className="about-text">
          <div className="about-me-first">
            <h2>| SOBRE MÍ</h2>
            <p className="about-me-paragraph">
              Soy Noé Hernández, tengo 20 años de edad, soy un desarrollador
              Frontend y futuro programador Fullstack. Las tecnologias que
              manejo son HTML, CSS, JS y React JS. Soy una persona responsable,
              con muchas metas y objetivos a alcanzar.Aprendo y creo todos los
              dias, ¡creemos un proyecto juntos!
            </p>
          </div>
          <div className="about-me-second">
            <h2>| DATOS PERSONALES</h2>
            <div className="personal-information">
              <p className="personal-item">
                <span>Especialidad</span> <br />
                Desarrolador Frontend
              </p>
              <p className="personal-item">
                <span>Email</span> <br /> evilld94@gmail.com
              </p>
              <p className="personal-item">
                <span>Celular</span> <br /> +503 60474702
              </p>
              <p className="personal-item">
                <span>Pais de residencia</span> <br /> El Salvador
              </p>
            </div>
          </div>
        </div>

        <div className="dowload-cv">
          <a href="#" className="dowload-cv-btn">
            Descargar CV
          </a>
        </div>
      </section>

      <section className="section-skills" id="skills">
        <h2>| HABILIDADES</h2>
        <section className="skills-preview container">
          <img src={reactLogo} alt="" />
          <img src={jsLogo} alt="" />
          <img src={cssLogo} alt="" />
          <img src={reduxLogo} alt="" />
          <img src={routerLogo} alt="" />
          <img src={boostrapLogo} alt="" />
        </section>
      </section>

      <section className="section-education container">
        <h2>| EDUCACIÓN</h2>
        <div className="education-items">
          <div className="education-item">
            <h3>Academlo</h3>
            <span>Programador FullStack</span>
            <p>(2022 - 2023)</p>
          </div>

          <div className="education-item">
            <h3>Universidad de El Salvador</h3>
            <span>Ingenieria en Desarrollo de Software</span>
            <p>En curso (2023 - 2028)</p>
          </div>

          <div className="education-item">
            <h3>Universidad de El Salvador</h3>
            <span>Ingenieria en sistemas</span>
            <p>Complete 2 años de carrera (2021 - 2023)</p>
          </div>
        </div>
      </section>

      <section className="portfolio container">
        <h2>| PORTAFOLIO</h2>

        <div className="portfolio-proyects">
          <div className="portfolio-proyect">
            <div className="portfolio-img-container">
              <img src={proyecto1} alt="" className="portafolio-img" />
              <PortfolioDetail
                tecnologies={["React JS", "CSS", "API REST"]}
                title="Pokedex"
                description="Una aplicación hecha con React JS atravez de una API REST, en la que puedes consultar la información de tus pokemones favoritos!"
                proyectUrl="https://pokedex-w-react.netlify.app/#/pokemons"
                code="https://github.com/Noehernandez24/pokedex-react"
              />
            </div>
          </div>

          <div className="portfolio-proyect">
            <div className="portfolio-img-container">
              <img src={proyecto2} alt="" className="portafolio-img" />
              <PortfolioDetail
                tecnologies={["React JS", "CSS", "API REST"]}
                title="Rick & Morty"
                description="Una aplicación hecha con React JS que nos permite consultar acerca de los Universos de la serie Rick and Morty."
                proyectUrl="https://cool-salmiakki-ab62f9.netlify.app/"
                code="https://github.com/Noehernandez24/Rick-And-Morty-React-App"
              />
            </div>
          </div>

          <div className="portfolio-proyect">
            <div className="portfolio-img-container">
              <img src={proyecto3} alt="" className="portafolio-img" />

              <PortfolioDetail
                tecnologies={["HTML", "CSS", "JS"]}
                title="Eccomerce Store"
                description="Una pagina web responsiva que simula la compra de productos de un eccomerce, hecho con vanilla JS!"
                proyectUrl="https://sprightly-torte-b42305.netlify.app/"
                code="https://github.com/Noehernandez24/academlo-eccomerce"
              />
            </div>
          </div>

          <div className="portfolio-proyect">
            <div className="portfolio-img-container">
              <img src={proyecto4} alt="" className="portafolio-img" />

              <PortfolioDetail
                tecnologies={["React JS", "CSS", "API REST"]}
                title="Digital Store"
                description="Un eccomerce hecho con React JS, con login en la que puedes comprar multiples dispositivos tecnologicos"
                proyectUrl="https://digital-store-react.netlify.app/"
                code="https://github.com/Noehernandez24/Eccomerce-With-React"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
