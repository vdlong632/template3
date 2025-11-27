import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main style={{ minHeight: "70vh", padding: "20px 0" }}>
        <Outlet /> 
      </main>

      <Footer />
    </>
  );
}
