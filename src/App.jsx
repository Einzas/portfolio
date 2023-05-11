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
    <>
      <main className="bg-[#0F103F] overflow-hidden text-white">
        <section className=" min-h-screen px-5  bg-[url('/images/Home.png')] bg-cover bg-center bg-no-repeat grid place-content-center ">
          <header className="absolute left-0 right-0">
            <Header menuShow={menuShow} setMenuShow={setMenuShow} />
          </header>
          <Description />
        </section>

        <About></About>

        <Works></Works>

        <Contact></Contact>

        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
