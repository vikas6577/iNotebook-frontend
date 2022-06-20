import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <NoteState>
        <Router>
            <Navbar />
            <Alert message="Notes deleted successfully"/>
          <div className="container">
            {/* <Home /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

// in package.json in script we wrote a line both:...... using which we can run server and react app simultaneously using single terminal
