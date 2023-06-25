import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
// import Header from "./Components/Header/Header";
// import Landingpage from "./Components/Login/Landing page/Landingpage";
// import Firstpage from "./Components/Login/Registration/Firstpage.js";
// import Secondpage from "./Components/Login/Registration/Secondpage.js";
// import Thirdpage from "./Components/Login/Registration/Thirdpage.js";
// import Plans from "./Components/Login/Registration/Plans.js";
// import Signin from "./Components/Login/Signin/Signin";
// import Login from "./Components/Login/Login";

import Signups from "./Components/ytpages/signup/Signups";
import Logins from "./Components/ytpages/Logins/Logins";
import PrivateRoute from "./Components/Protective";

function App() {
  const user = localStorage.getItem("token");

  return (
    // <Router>
    //   {/* <Header /> */}
    //   <Routes>
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/" element={<Landingpage />} />
    //     <Route path="/firstpage" element={<Firstpage />} />
    //     <Route path="/secondpage" element={<Secondpage />} />
    //     <Route path="/thirdpage" element={<Thirdpage />} />
    //     <Route path="/plans" element={<Plans />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signin" element={<Signin />} />
    //   </Routes>
    // </Router>

    <Router>
      {/* <Header /> */}
      <Routes>
        {user && <Route path="/" exact element={<Home />} />}
        <Route path="/signup" exact element={<Signups />} />
        <Route path="/login" exact element={<Logins />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
