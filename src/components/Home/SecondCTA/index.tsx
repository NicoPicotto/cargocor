import Container from "@/components/Container";

const SecondCTA = () => {
   return (
      <section className="py-10">
         <Container>
            <div className="flex flex-col relative rounded-lg overflow-hidden gap-4 p-10 min-h-[33rem] justify-end">
               <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/20 z-[-1]"></div>
               <img
                  src="/home/cta2.png"
                  alt="Manos estrechándose en un ambiente industrial"
                  className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
               />
               <h2 className="text-white text-4xl max-w-[16ch]">
                  Descubrí los beneficios de los <b>Slip Sheets.</b>
               </h2>
               <p className="text-white text-lg max-w-[40ch]">
                  La solución innovadora para el manejo de carga que reduce
                  costos y maximiza la capacidad de almacenamiento.
               </p>
               <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2 text-lg max-w-[40ch]">
                     <img
                        src="/common/checkcircle.svg"
                        alt="icono de check"
                        className="h-5 w-5"
                     />
                     <span className="text-white">
                        Reducí costos de embalaje.
                     </span>
                  </li>
                  <li className="flex items-center gap-2 text-lg max-w-[40ch]">
                     <img
                        src="/common/checkcircle.svg"
                        alt="icono de check"
                        className="h-5 w-5"
                     />
                     <span className="text-white">
                        Aumentá el espacio disponible
                     </span>
                  </li>
                  <li className="flex items-center gap-2 text-lg max-w-[40ch]">
                     <img
                        src="/common/checkcircle.svg"
                        alt="icono de check"
                        className="h-5 w-5"
                     />
                     <span className="text-white">Protegé tu carga.</span>
                  </li>
               </ul>
            </div>
         </Container>
      </section>
   );
};
export default SecondCTA;
