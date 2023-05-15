import { useState } from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <section className="bg-[#0F103F] mx-0 w-full overflow-hidden text-white ">
      <article className="bg-[url('/images/Home1.png')] bg-no-repeat   bg-center bg-cover">
        <Header menuShow={menuShow} setMenuShow={setMenuShow} />
        <Description />
        <main className="py-80"></main>
      </article>
      <About />
      <article className="bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat overflow-hidden py-64">
        <Works />
      </article>
      <article className="bg-[url('/images/last.png')] bg-contain min-h-screen bg-no-repeat py-40">
        <Contact />
      </article>
      <Footer />
    </section>
  );
}

export default App;
