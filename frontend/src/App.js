import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Blog from "./Blog/Blog";
import BlogContent from "./Blog/BlogContent";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogContent" element={<BlogContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
