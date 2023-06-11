import { GlobalStyled } from "./GlobalStyled";
import { Navbar, Hskills, Contact, Proyects, Footer, About } from "./layout";

import Aluragreek from "./assets/Proyects/Aluragree.png";
import croquis from "./assets/Proyects/croquis.png";
import org from "./assets/Proyects/org.png";
import Portafolio from "./assets/Proyects/Portafolio-react.png";
import encriptador from "./assets/Proyects/Encriptador.png";
import rating from "./assets/Proyects/rating-component.png";

const ListSkill = [
  {
    title: "React",
    img: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
  },
  {
    title: "HTML",
    img: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
  },
  {
    title: "CSS",
    img: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
  },
  {
    title: "Javascript",
    img: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
  },
  {
    title: "Git",
    img: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
  },
  {
    title: "Postgresql",
    img: "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg",
  },
  {
    title: "Mysql",
    img: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg",
  },
  {
    title: "Xampp",
    img: "https://profilinator.rishav.dev/skills-assets/xampp.png",
  },
];

const ListProyects = [
  {
    title: "Croquis Virtual",
    message:
      "Proyecto de titulación: Sistema de búsqueda de edificios y salones de clases para optimizar el tiempo.",
    tecnologi: "HTML, CSS Y JAVASCRIPT",
    linkGith: "https://croquislp.netlify.app/",
    linkDemo: "https://croquislp.netlify.app/",
    img: croquis,
  },
  {
    title: "My Org",
    message: "Aplicacion web donde puedes organizar a tu equipo de trabajo",
    tecnologi: "REACT",
    linkGith: "https://github.com/Hector2221/org-react",
    linkDemo: "https://org-react.netlify.app/",
    img: org,
  },
  {
    title: "AluraGeek",
    message:
      "Shop Store, consumo de una Api Rest para productos, usuarios, etc.",
    tecnologi: "HTML, CSS Y JAVASCRIPT",
    linkGith: "https://github.com/Hector2221/AluraGeek",
    linkDemo: "hector2221.github.io/AluraGeek/",
    img: Aluragreek,
  },
  {
    title: "Encriptador",
    message: "Encriptador de palabras a,e,i,o,u",
    tecnologi: "HTML, CSS Y JAVASCRIPT",
    linkGith:
      "https://github.com/Hector2221/Encriptador-de-texto---Alura-Challenges-ONE",
    linkDemo:
      "https://hector2221.github.io/Encriptador-de-texto---Alura-Challenges-ONE/",
    img: encriptador,
  },
  {
    title: "Rating Component",
    message: "Aplicacion web con react router dom ",
    tecnologi: "REACT",
    linkGith: "https://github.com/Hector2221/react-rating-component",
    linkDemo: "https://hector2221.github.io/react-rating-component/",
    img: rating,
  },
  {
    title: "Portafolio",
    message: "Portafolio creado como practica",
    tecnologi: "REACT",
    linkGith: "https://github.com/Hector2221/single-page-developer-portfolio",
    linkDemo: "https://hector2221.github.io/single-page-developer-portfolio/",
    img: Portafolio,
  },
];

const ListAbout = {
  title: "Desarrollador Web",
  name: "Hector Alejandro",
  img: "https://avatars.githubusercontent.com/u/109434318?v=4",
  text: "Soy estudiante de Ingeniería en Sistemas Computacionales en mis últimos años de carrera. Con actitud proactiva y autodidacta, siempre en busca de aprender nuevas habilidades y tecnologías, como en participar en nuevos proyectos. Como parte de mi formación he estudiado en Platzi, Oracle ONE y Touch of Tech, donde me he especializado en desarrollo web y tecnologías Front- end.",
};

function App() {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <About ListAbout={ListAbout} />
      <Proyects ListProyects={ListProyects} />
      <Hskills ListSkill={ListSkill} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
