import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import Experience from "./Experience";
import Bot from "./Bot";
import Footer from "./Footer";
import Projects from "./Projects";

function Home() {
  return (
    <div className="bg-black">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Bot />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
