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

function App() {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <About />
      <Proyects ListProyects={ListProyects} />
      <Hskills ListSkill={ListSkill} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
