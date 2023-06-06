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

function App() {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <About/>
      <Proyects />
      <Hskills ListSkill={ListSkill} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
