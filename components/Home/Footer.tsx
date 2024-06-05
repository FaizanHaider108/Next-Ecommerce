import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-20 px-12  mt-40">
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1st part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            WOW Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            cumque, veritatis impedit praesentium nobis blanditiis consequatur,
            quas modi nostrum ex voluptates quia tempora eaque quis velit dolore
            magni veniam repudiandae? Rem quidem a beatae?
          </p>
          <p className="text-sm py-10 text-black opacity-80">
            (+000) 1234 567 87 info@example.com
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_link">About us</p>
          <p className="footer_link">Privacy policy</p>

          <p className="footer_link">Return Policy</p>

          <p className="footer_link">Shipping Policy</p>

          <p className="footer_link">Dropshipping</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_link">Dashboard</p>
          <p className="footer_link">My Orders</p>

          <p className="footer_link">Track Orders</p>

          <p className="footer_link">Account Details</p>

          <p className="footer_link">Shipping Policy</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_link">Affiliates</p>
          <p className="footer_link">Best Sellers</p>

          <p className="footer_link">Letest Products</p>
           <p className="footer_link">Sale Products</p>
          </div>
      </div>
      {/* copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
     <p> © Copyright 2024</p>
      <Image src={"/images/pay.svg"} alt="payment method" width={230} height={230} className="object-contain sm:ml-auto"/>
      </div>
    </div>
  );
};

export default Footer;
