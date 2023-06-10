import { GlobalStyled } from "./GlobalStyled";
import { Navbar, Hskills, Contact, Proyects, Footer, About } from "./layout";

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    tecnologi: "HTML, CSS Y JAVASCRIPT",
    linkGith: "https://www.google.com/",
    linkDemo: "",
    img: "https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Croquis Virtual",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    tecnologi: "HTML, CSS Y JAVASCRIPT",
    linkGith: "",
    linkDemo: "",
    img: "https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Croquis Virtual",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    tecnologi: "HTML, CSS Y JAVASCRIPT",
    linkGith: "",
    linkDemo: "",
    img: "https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Croquis Virtual",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    tecnologi: "HTML, CSS Y JAVASCRIPT",
    linkGith: "",
    linkDemo: "",
    img: "https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
