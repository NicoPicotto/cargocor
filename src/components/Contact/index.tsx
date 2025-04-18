import Container from "../Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
   return (
      <section className="py-10 min-h-[85dvh] relative">
         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/20 z-[-1]"></div>
         <img
            src="/home/hero.jpeg"
            alt="Trabajador de industria trasaladando mercadería"
            className="absolute top-0 object-top left-0 w-full h-full object-cover z-[-2]"
         />
         <Container>
            <div className="grid grid-cols-6 gap-4 mt-20">
               <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm">
                  <h1 className="text-3xl font-bold mb-4">Contactanos</h1>
                  <div className="flex flex-col gap-4">
                     <div className="flex gap-2 items-center">
                        <div className="bg-primary p-2 rounded-full">
                           <Phone className="text-white" size="12" />
                        </div>
                        <p>Vía Telefónica al (0358) 4388136</p>{" "}
                     </div>
                     <div className="flex gap-2 items-center">
                        <div className="bg-primary p-2 rounded-full">
                           <MessageCircle className="text-white" size="12" />
                        </div>
                        <p>Vía Whatsapp </p>{" "}
                     </div>
                     <div className="flex gap-2 items-center">
                        <div className="bg-primary p-2 rounded-full">
                           <Phone className="text-white" size="12" />
                        </div>
                        <p>Vía Mail a ventas@cargocor.com.ar</p>{" "}
                     </div>

                     <div className="border border-gray-200"></div>
                     <p className="text-sm text-gray-500">
                        Nuestro horario de atención de es de Lunes a Viernes de
                        08:00 a 12:00 y de 16:00 a 20:00.
                     </p>
                  </div>
               </div>
               <div className="col-span-4 bg-white p-4 rounded-lg shadow-sm">
                  <form>
                     <div className="mb-4"></div>
                  </form>
               </div>
            </div>
         </Container>
      </section>
   );
};
export default Contact;
