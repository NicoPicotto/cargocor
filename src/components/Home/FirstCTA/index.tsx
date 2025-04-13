import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const FirstCTA = () => {
   return (
      <section className="py-10">
         <Container>
            <div className="flex flex-col relative rounded-lg overflow-hidden gap-4 p-10 min-h-[33rem] justify-end">
               <div className="absolute inset-0 bg-primary/50 z-[-1]"></div>
               <img
                  src="/home/cta1.png"
                  alt="Manos estrechándose en un ambiente industrial"
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
               />
               <h2 className="text-white text-4xl max-w-[24ch]">
                  Ofrecemos productos de alta calidad y un servicio
                  personalizado, brindando soluciones innovadoras{" "}
                  <b>adaptadas a cada cliente</b>.
               </h2>
               <div className="flex gap-4 items-center">
                  <Button variant="secondary" size="lg">
                     Conocenos
                  </Button>
                  <Button variant="outline" size="lg">
                     Contactanos
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
};
export default FirstCTA;
