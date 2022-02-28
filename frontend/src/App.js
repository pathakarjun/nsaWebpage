import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import BlogHeader from "./Blog/BlogHeader";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/blogs" element={<BlogHeader />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
