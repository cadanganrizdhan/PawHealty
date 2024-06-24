import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import AboutusAfter from "./pages/AboutusAfter";
import Listdokter from "./pages/Listdokter";
import Singup from "./pages/Singup";
import Forumdiskusi from "./pages/Forumdiskusi";
import Isiblog from "./pages/Isiblog";
import IsiblogA from "./pages/IsiblogA";
import Listblog from "./pages/Listblog";
import ListblogA from "./pages/ListblogA";
import Bookcal from "./pages/Bookcal";
import Booktime from "./pages/Booktime";
import Bookfix from "./pages/Bookfix";
import Tambahforumdiskusi from "./pages/Tambahforumdiskusi";
import Login from "./pages/Login";
import Profil from "./components/Profil";
import Profilpost from "./pages/Profilpost";
import Profilrep from "./pages/Profilrep";
import Profileapp from "./pages/Profileapp";
import AfterLogin from "./pages/AfterLogin";
import Map from "./pages/Map";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BERANDA" element={<Home />} />
        <Route path="/AfterLogin" element={<AfterLogin />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/AboutusAfter" element={<AboutusAfter />} />
        <Route path="/Listdokter" element={<Listdokter />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/Forumdiskusi" element={<Forumdiskusi />} />
        <Route path="/Isiblog" element={<Isiblog />} />
        <Route path="/IsiblogA" element={<IsiblogA />} />
        <Route path="/Listblog" element={<Listblog />} />
        <Route path="/ListblogA" element={<ListblogA />} />
        <Route path="/Bookcal" element={<Bookcal />} />
        <Route path="/Booktime" element={<Booktime />} />
        <Route path="/Bookfix" element={<Bookfix />} />
        <Route path="/Tambahforumdiskusi" element={<Tambahforumdiskusi />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Profilpost" element={<Profilpost />} />
        <Route path="/Profilrep" element={<Profilrep />} />
        <Route path="/Profileapp" element={<Profileapp />} />
        <Route path="/Nearlok" element={<Map />} />
      </Routes>
    </Router>
  );
};
export default App;
