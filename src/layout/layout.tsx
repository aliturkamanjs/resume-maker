import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ children }: any) {
  return (
    <div className="max-w-7xl min-h-screen mx-auto relative flex flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
