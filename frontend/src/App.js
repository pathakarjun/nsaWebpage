import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
