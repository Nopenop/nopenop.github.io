// import code from './assets/code.png';
import hash_lib from './assets/hash_lib.png';
import head_shot from './assets/head_shot.jpg';
import system_monitor from './assets/system_monitor.png';

export default function OldPortfolio() {
  return (<>
    <title>Noah Campise's Portfolio</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,1200&family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div id="portfolio">
      <nav>
        <a href="#welcome">About Me</a>
        <a href="#projects">My Projects</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <div id="welcome">
        <div id="title-card" className="box">
          <h1>I am Noah Campise</h1>
          <img
            src={head_shot}
            id="head_shot"
            alt="Head shot of Noah Campise"
          />
          <p>Undergraduate and Aspiring Software Engineer</p>
        </div>
        <div id="description" className="box">
          <p>
            Undergraduate attending Florida Polytechnic University. Expected to
            graduate 2026. Taking class such as operating systems, data
            structures, machine learning and more.
          </p>
        </div>
      </div>
      <div id="projects">
        <div className="box">
          <img src={system_monitor} alt="System monitor application image" />
          <a href="https://github.com/Nopenop/HW-19-API" target="_blank">
            System monitor application
          </a>
        </div>
        <div className="box">
          <img src={hash_lib} alt="Brute force hashlib script" />
          <a
            href="https://github.com/Nopenop/L13-hashlib-logging/blob/main/hash_solve.py"
            target="_blank"
          >
            Brute Force Hash Decryption Script
          </a>
        </div>
        <div className="box">
          <img src={hash_lib} alt="Projectile motion simulator" />
          <a
            href="https://github.com/Nopenop/L09-homework-canonball"
            target="_blank"
          >
            Projectile Motion Simulator
          </a>
        </div>
      </div>
      <div id="contact">
        <h1>Contact me</h1>
        <div id="links">
          <a
            href="https://www.linkedin.com/in/noah-campise-7426aa248/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/Nopenop" target="_blank">
            GitHub
          </a>
        </div>
        <div id="locations">
          <p>campisenoah1@gmail.com</p>
        </div>
      </div>
    </div>
  </>
  );
}
