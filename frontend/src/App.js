import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
