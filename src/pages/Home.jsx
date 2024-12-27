import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import ContactMe from "../sections/ContactMe";
import Skills from "../sections/Skills";

const Home = () => {
  return (
    <main id="home" className="max-w-7xl mx-auto">
      <Hero />
      <Skills />
      <AboutMe />
      <ContactMe />
    </main>
  );
};

export default Home;
