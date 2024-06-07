"use client"
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast';
import {  addItem } from '@/store/CartSlice';
import { Product } from '@/types';
import React from 'react'
import { useDispatch } from 'react-redux';

const AddToCart = ({product}: {product: Product}) => {
  const {toast} = useToast();
  const dispatch = useDispatch();
  const addCartitem = () => {
    toast({
      description:"Product added in cart",
      variant:"success"
    })
    dispatch(addItem(product))
  };
  return (
    <Button className='mt-6'
    onClick={() => addCartitem()}
    >Add to Cart</Button>
  )
}

export default AddToCart