import Hero from "@/components/About/Hero";
import Mision from "@/components/About/Mision";
import Servicios from "@/components/About/Servicios";
import AboutCTA from "@/components/Home/SecondCTA";

const AboutView = () => {
   return (
      <div>
         <Hero />
         <Mision />
         <Servicios />
         <AboutCTA />
      </div>
   );
};
export default AboutView;
