import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MeteoNavbar from "./assets/components/MeteoNavbar";
import MeteoHome from "./assets/components/MeteoHome";
import MeteoFooter from "./assets/components/MeteoFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteoInfo from "./assets/components/MeteoInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <MeteoNavbar />
        <Routes>
          <Route path="/" element={<MeteoHome />} />
          <Route path="/MeteoInfo" element={<MeteoInfo/>} />
        </Routes>
        <MeteoFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
