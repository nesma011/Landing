import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
       <div className="absolute top-[-10%] left-[25%] w-[450px] h-[450px] bg-teal-600/20  blur-[150px]"></div>
                <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-white/5  blur-[120px]"></div>
        <div className="absolute top-[-15%] right-[5%] w-[450px] h-[450px] bg-pink-500/20  blur-[150px]"></div>
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-white/5  blur-[120px]"></div>
      
        <div className="absolute top-0 left-17 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        <div className="absolute top-0 right-17 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
         <div className="absolute top-0 left-38 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        <div className="absolute top-0 right-38 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

      </div>

      <Navbar />

      <Outlet />
      <Footer/>
    </div>
  );
}
