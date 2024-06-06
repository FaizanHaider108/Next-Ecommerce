"use client"
import { RootState } from '@/store/store'
import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from '../ui/sheet'

const ShoppingCartBtn = () => {
  const items = useSelector((state: RootState) => state.cart.items)
  const totalQuantity = items.reduce((total, item) => total + item.quantity ,0)

  return (
    <Sheet>
      <SheetTrigger>
   <div className="relative">
    <span className='bg-red-500 absolute -top-3 -right-2 w-6 h-6 text-center flex items-center justify-center flex-col text-xs text-white rounded-full'>
      {totalQuantity}
    </span>
    <ShoppingBagIcon cursor={"pointer"}/>
   </div>
   </SheetTrigger>
   {/* sidebar */}
   <SheetContent className='overflow-auto h-full'>
    
      

  </SheetContent>
   </Sheet>
  
  )
}

export default ShoppingCartBtn