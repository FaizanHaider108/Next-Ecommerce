import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

const ShoppingCartBtn = () => {
  return (
   <div className="relative">
    <span className='bg-red-500 absolute -top-3 -right-2 w-6 h-6 text-center flex items-center justify-center flex-col text-xs text-white rounded-full'>6</span>
    <ShoppingBagIcon cursor={"pointer"}/>
   </div>
  )
}

export default ShoppingCartBtn