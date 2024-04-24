import {
  Benefits,
  Header,
  Hero,
  Collaboration,
  Services,
  Pricing,
  Roadmap,
  Footer,
} from "./components";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer/>
      </main>
      <ButtonGradient />
    </>
  );
};

export default App;
