import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="font-merriweather">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
