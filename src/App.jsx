import "./App.css";
import "./assets/Navbar/Nav";
import { Navbar } from "./assets/Navbar/Nav";
import { MainSection } from "./assets/MainSection/MainSection";
import { SideNav } from "./assets/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
