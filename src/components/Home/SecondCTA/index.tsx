import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
   return (
      <section className="py-10">
         <Container>
            <div className="flex flex-col relative rounded-lg overflow-hidden gap-4 p-10 min-h-[33rem] justify-end">
               <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/20 z-[-1]"></div>
               <img
                  src="/about/contact-cta.jpg"
                  alt="Manos estrechándose en un ambiente industrial"
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
               />
               <h2 className="text-white text-4xl max-w-[20ch]">
                  Contactanos y adquirí un <b>servicio a tu medida.</b>
               </h2>

               <Link to="/contacto" className="text-primary mt-2">
                  <Button variant="secondary" size="lg" className="w-fit group">
                     Quiero saber más
                     <ArrowRight className="transition-transform group-hover:translate-x-2" />
                  </Button>
               </Link>
            </div>
         </Container>
      </section>
   );
};
export default AboutCTA;
