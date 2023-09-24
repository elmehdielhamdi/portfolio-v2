import { Footer, Navbar, Wrapper } from "./components";
import { Home, About, Work, Career, Contact } from "./pages";

export default function App() {
  return (
    <>
      <Navbar />
      <Wrapper active="home" children={<Home />} />
      <hr className="border-t border-solid border-[#e6ecf8]" />
      <Wrapper active="about" children={<About />} />
      <hr className="border-t border-solid border-[#e6ecf8]" />
      <Wrapper active="work" children={<Work />} />
      <hr className="border-t border-solid border-[#e6ecf8]" />
      <Wrapper active="career" children={<Career />} />
      <hr className="border-t border-solid border-[#e6ecf8]" />
      <Wrapper active="contact" children={<Contact />} />
      <Footer />
    </>
  );
}
