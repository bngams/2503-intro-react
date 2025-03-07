import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../models/Product";

//ProductCard(props: {product: Product})
function ProductCard({ product } : {product: Product}) {
    return (
        <Card>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.price} €</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center flex-col">
            <div className="flex justify-center">
              <img className="max-w-[250px] max-h-[250px]" src={product.thumbnail} alt={product.title} />
            </div>
            <button>Add to cart</button>
          </CardContent>
        </Card>
    );
}

export default ProductCard;