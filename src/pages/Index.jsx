import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

function Index() {
  return (
    <div className="container py-10">
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Index;
