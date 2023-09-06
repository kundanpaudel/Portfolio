import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Faq from "./sections/faq/Faq";
import Footer from "./sections/footer/Footer";
import Contact from "./sections/contact/Contact";
import Portfolio from "./sections/portfolio/Portfolio";
import Floatnav from "./sections/floatnav/Floatnav";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Faq/>
      <Footer/>
      <Floatnav/>
    </main>
  )
}

export default App