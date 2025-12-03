import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Pricing from "../pages/pricing/Pricing";
import Tokens from "../pages/tokens/Tokens";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/Error";
import BlogPost from "../pages/blog/BlogPost";
import Test from "../pages/test/Text";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpost/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Route>

      {/* Trang lỗi */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
