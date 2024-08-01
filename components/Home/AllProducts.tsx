"use client";

import { getAllProducts } from "@/Request/requests";
import { Product } from "@/types";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "../helper/ProductCard";
import {fakeMedicines} from "../../lib/constants.js"
const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
 
  return <div className="pt-16 pb-12 h-[100%]">
    <h1 className="text-center font-bold text-2xl">All Products</h1>
    {loading ? (
        <div className="flex justify-center m-16 items-center">
            <Loader size={32} className="animate-spin"/>
        </div>
    ) : ( 
      <div className="w-4/5 mx-auto mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-60 md:gap-40 ">
            {
              fakeMedicines?.map((product)=> {
                return <ProductCard key={product.id} product={product}/>
              })
            }
      </div>
    )}
  </div>;
};

export default AllProducts;
