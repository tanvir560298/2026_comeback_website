import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages WITH navbar
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import PortfolioLanding from "./pages/PortfolioLanding";

// Pages WITHOUT navbar
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Calculus2 from "./pages/Semester2/Calculus2/Calculus2";

// ✅ PrivateRoute
import PrivateRoute from "./routes/PrivateRoute";
import Physics from "./pages/Semester2/Physics/Physics";

export default function App() {
  return (
    <Routes>
      {/* Pages WITH navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* ✅ Blog public */}
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* ✅ Portfolio protected */}
        <Route
          path="/PortfolioLanding"
          element={
            
              <PortfolioLanding />
            
          }
        />
      </Route>

      {/* Pages WITHOUT navbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ✅ Course page protected */}
      <Route
        path="/semester2/calculus2"
        element={
          <PrivateRoute>
            <Calculus2 />
          </PrivateRoute>
        }
      />
      <Route
        path="/physics"
        element={
          <PrivateRoute>
            <Physics/>
          </PrivateRoute>
        }
      />

      {/* 404 */}
    </Routes>
  );
}
