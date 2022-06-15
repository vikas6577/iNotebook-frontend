import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route exact path="/"
          element={<Home />}/>
          <Route exact path="/about"
            element= {<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// in package.json in script we wrote a line both:...... using which we can run server and react app simultaneously using single terminal
