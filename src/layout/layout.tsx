import Navbar from "../components/Navbar";

function Layout({ children }: any) {
  return (
    <div className=" min-h-screen mx-auto relative flex flex-col items-center justify-between">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
