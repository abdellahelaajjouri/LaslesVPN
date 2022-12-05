import "./App.css";
import {
  Banner,
  Features,
  Plans,
  Testimonials,
  Footer,
  Home,
  Infos,
  Navbar,
  Network,
} from "./containers/index.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Infos />
      <Features />
      <Plans />
      <Network />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
