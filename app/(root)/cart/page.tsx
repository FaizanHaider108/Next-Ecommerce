"use client";
import { Button } from "@/components/ui/button";
import { CartItem, addItem, removeItem } from "@/store/CartSlice";
import { RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const {user} = useUser(); 
  // get our cart button
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const vat = (+totalPrice * 0.15).toFixed(2);
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  const additemhandler = (item:CartItem) => {
        dispatch(addItem(item));
  }
 
  const removeitemhandler = (id:number) => {
     dispatch(removeItem({id}))
  }

  return (
    <div className="mt-8 min-h-[60vh]">
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src={"/images/cart.svg"}
            alt="empty_cart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-bold">Your Cart is Empty</h1>
          <Link href={"/"}>
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
      )}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="rounded-lg shadow-md overflow-hidden xl:cols-span-4">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-600">
              Your Cart ({totalQuantity}) items
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex pb-6 mt-2 p-5 border-b-[1.5] border-opacity-25 border-gray-700 items-center space-x-10">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Category: {item.category}
                      </h1>
                      <h1 className="md:text-2xl text-lg font-bold text-blue-700">
                        ${item.price}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Quantity: {item.quantity}
                      </h1>
                      <div className="flex items-center mt-4 space-x-2">
                        <Button
                        onClick={() => {
                            additemhandler(item)
                        }}
                        >Add More</Button>
                        <Button
                         onClick={(id) => {
                            removeitemhandler(item.id)
                        }}
                        variant={"destructive"}>Remove</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-blue-700 sticky top-[25vh] h-[50vh] rounded-lg">
            <h1 className="text-center mt-4 font-bold text-2xl text-white">Summary</h1>    
            <div className="w-full h-[1.2px] bg-white mt-4"></div>
            <div className="flex mt-10 justify-between pl-10 pr-10">
                <h1 className="text-white font-bold text-xl">Subtotal</h1>
                <h1 className="text-white font-bold text-xl">${totalPrice}</h1>
            </div>
            <div className="flex mt-10 justify-between pl-10 pr-10">
                <h1 className="text-white font-bold text-xl">VAT</h1>
                <h1 className="text-white font-bold text-xl">{vat}%</h1>
            </div>
            <div className="flex mt-10 justify-between pl-10 pr-10">
                <h1 className="text-white font-bold text-xl">Shipping</h1>
                <h1 className="text-white font-bold text-xl">FREE</h1>
            </div>
            <div className="w-full h-[1.2px] bg-white mt-4"></div>
            <div className="flex mt-10 justify-between pl-10 pr-10">
                <h1 className="text-white font-bold text-xl">TOTAL:</h1>
                <h1 className="text-white font-bold text-xl">${totalPriceWithVat}</h1>
            </div>
            <div className="mt-4">
            {!user && (
                <Link href={"/"}>
                    <Button className="w-full p-8 text-xl">Sign In to Checkout</Button>
                </Link>
            )}
            {
                user && (
                    <Button className="w-full p-8 text-xl"> Pay with Paypal</Button>
                )
            }
            </div>
         </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
