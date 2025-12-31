import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PortfolioLanding from "./pages/PortfolioLanding"; // ✅ ADD THIS

export default function App() {
  return (
    <Routes>
      {/* Pages WITH navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* ✅ ADD PORTFOLIO ROUTE */}
        <Route
          path="/PortfolioLanding"
          element={<PortfolioLanding />}
        />
      </Route>

      {/* Pages WITHOUT navbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
