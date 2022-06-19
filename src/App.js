import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Photos from "./Pages/Photos";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <main>
      <Home />
      <Photos />
      </main>
    </div>
  );
}

export default App;
