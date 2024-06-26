"use client"
import { Product } from "@/types";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useDispatch} from "react-redux";
import { addItem } from "@/store/CartSlice";
// Ensure this path is correct

type ProductProps = {
    product: Product;
}

const ProductCard = ({ product }: ProductProps) => {

    const num = Math.round(product.rating.rate);
    const dispatch = useDispatch();
    const ratingArray = new Array(num).fill(0);

    // add to cart
    const addCart = (product: Product) => {
       
        dispatch(addItem(product));
    };
  return (
    <div className="p-4"> 
    <div className="w-[200px] h-[150px] ">
    <Image src={product.image} alt="product image" width={100} height={100} className="w-[80%] h-[80%] object-contain "/>
    {/* category */}
    <p className="mt-5 text-xs capitalize text-gray-600">{product.category}</p>
    {/* title */}
    <Link href={`/product/product-details/${product.id}`}>
      <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">{product.title}</h1>
    </Link>
    {/* rating */}
    <div className="flex items-center">
      {ratingArray.map((star) => {
        return <StarIcon key={Math.random() * 1000} size="16" fill="yellow" className="text-yellow-500"/>
      })}
    </div>
    {/* PRICING */}
    <div className="flex mt-2 items-center space-x-2">
      <p className="text-black text-base line-through font-semibold">{`${(product.price).toFixed(2)}`}
      </p>
      <p className="text-black text-lg font-semibold space-x-2 opacity-50">${product.price}</p>
    </div>
    {/* buttons */}
    <div className="mt-4 flex items-center space-x-2">
      <Button onClick={() => {
          addCart(product)
        }} size={"icon"}>
        <ShoppingBag  size={18}/>
      </Button>
      <Button size={"icon"} className="bg-red-500">
        <Heart size={18}/>
      </Button>
    </div>
    </div>
    </div>
  )
}

export default ProductCard