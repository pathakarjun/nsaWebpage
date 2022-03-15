import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Blog from "./Blog/Blog";
import BlogContent from "./Blog/BlogContent";
import CreateBlog from "./CreateBlog";
import Resources from "./Resources";
import Scholarship from "./Scholarship";
import Home from "./Landing Page/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogContent/:id" element={<BlogContent />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/scholarships" element={<Scholarship />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
