import { getProductByCategory, getSingleProduct } from '@/Request/requests';
import { Product } from '@/types';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import AddToCart from './add-cart';
import ProductCard from '@/components/helper/ProductCard';

const ProductDetails = async ({params}:{params:{id: string}}) => {
  const id = params.id;
  const SingleProduct:Product = await getSingleProduct(id);
  const relatedProduct:Product[] = await getProductByCategory(
    SingleProduct.category
  )
  const num = Math.round(SingleProduct?.rating?.rate);
  const starArray =  new Array(num).fill(0);
  return (
    <div className='mt-20'>
    <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between gap-40 max-w-[1330px]'>
      {/* images */}
      <div className='col-span-3 mb-6 lg:mb-0'>
        <Image src={SingleProduct.image} alt={SingleProduct.title} width={400} height={400}/>
      </div>
      <div className='cols-span-4 max-w-[600px]'>
        <h1 className='lg:text-3xl text-2xl font-bold text-black'>
          {SingleProduct.title}
        </h1>
          <div className='mt-2 flex items-center space-x-2'>
          <div className='flex items-center'>
            {starArray.map((star) => {
              return <StarIcon 
              key={Math.random()*5000}
              size={20}
              fill='yellow'
              className='text-yellow-600'
              />
            })}
          </div>
          <p className='text-base text-gray-700 font-semibold'>{SingleProduct?.rating?.count} Reviews</p>
          </div>
          <span className='w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4'></span>
          <h1 className='lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold'>${SingleProduct?.price.toFixed(2)}</h1>
          {/* product description */}
          <p className='mt-4 text-base text-black'>{SingleProduct?.description}</p>
          <p className='mt-4 text-sm text-black text-opacity-70 font-semibold'>
           Category: {SingleProduct?.category}
          </p>
          <p className='mt-4 text-sm text-black text-opacity-70 font-semibold'>
           SKU: {Math.random()*500}
          </p>
          {/* Add to cart */}
          <AddToCart/>
      </div>
    </div>
    {/* reated products */}
    <div className='w-4/5 mt-16 mx-auto'>
      <h1 className='text-2xl text-black font-semibold'>Related Products</h1>
    </div>
    <div className='mt-16 container mx-auto grid grid-cols-1 gap-60 md:gap-40 lg:gap-40 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px]'>
            {relatedProduct.map((product) => {
              return <ProductCard key={product.id} product={product}/>
            })}
    </div>
    </div>
  )
}

export default ProductDetails