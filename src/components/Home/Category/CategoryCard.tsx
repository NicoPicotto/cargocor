import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
   name: string;
   description: string;
   image: string;
   url: string;
}

const CategoryCard = ({ name, description, image, url }: CategoryCardProps) => {
   return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <div className="w-full h-[21rem] overflow-hidden">
            <img className="w-full h-full object-cover object-bottom" src={image} alt={name} />
         </div>
         <div className="flex flex-col gap-2 p-4">
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-lg max-w-[30ch]">{description}</p>
            <Link to={url} className="text-primary mt-2">
               <Button variant="default" size="lg" className="w-fit group">
                  Ver más
                  <ArrowRight className="transition-transform group-hover:translate-x-2" />
               </Button>
            </Link>
         </div>
      </div>
   );
};
export default CategoryCard;
