import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MeteoNavbar from "./assets/components/MeteoNavbar";
import MeteoHome from "./assets/components/MeteoHome";
import MeteoFooter from "./assets/components/MeteoFooter";


function App() {
  return (
    <>
      <MeteoNavbar />
      <MeteoHome />
      <MeteoFooter/>
    </>
  );
}

export default App;
