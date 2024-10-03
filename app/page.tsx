import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa"
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex 
    justify-center items-center flex-col  
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
       <Hero />
       <Grid />
       <RecentProjects />
       <Clients />
       <Experience />
       <Approach />
       <Footer />
      </div>
    </main>
  );
}
