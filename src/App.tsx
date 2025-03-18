import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Inicio from "./Screens/Inicio";
import Moviliario from "./Screens/Moviliario";
import Nosotros from "./Screens/Nosotros";
import Galeria from "./Screens/Galeria";
import Mesas from "./ScreenMov/Mesas";

const App: React.FC = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/moviliario" element={<Moviliario />} />
          <Route path="/moviliario/mesas" element={<Mesas/>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
