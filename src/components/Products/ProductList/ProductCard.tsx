import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
   id: string;
   nombre: string;
   descripcion: string;
   imageUrls: string[];
}
const ProductCard = ({
   id,
   nombre,
   descripcion,
   imageUrls,
}: ProductCardProps) => {
   return (
      <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
         {imageUrls.length > 0 && (
            <div className="w-full h-[21rem] overflow-hidden">
               <img
                  className="w-full object-bottom"
                  src={imageUrls[0]}
                  alt={nombre}
               />
            </div>
         )}
         <div className="flex flex-col gap-2 p-4">
            <p className="text-2xl font-bold">{nombre}</p>
            <p className="text-lg max-w-[30ch]">{descripcion}</p>
            <Link to={`/producto/${id}`} className="text-primary mt-2">
               <Button variant="default" size="lg" className="w-fit group">
                  Ver más
                  <ArrowRight className="transition-transform group-hover:translate-x-2" />
               </Button>
            </Link>
         </div>
      </div>
   );
};
export default ProductCard;
