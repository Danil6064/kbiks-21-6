import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Subject from "./pages/Subject";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="conteiner">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="subject/:id/*" element={<Subject />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
