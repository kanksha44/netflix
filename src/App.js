import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
// import Header from "./Components/Header/Header";
import Landingpage from "./Components/Login/Landing page/Landingpage";
import Firstpage from "./Components/Login/Registration/Firstpage.js";
import Secondpage from "./Components/Login/Registration/Secondpage.js";
import Thirdpage from "./Components/Login/Registration/Thirdpage.js";
import Plans from "./Components/Login/Registration/Plans.js";
import Signin from "./Components/Login/Signin/Signin";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/secondpage" element={<Secondpage />} />
        <Route path="/thirdpage" element={<Thirdpage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
