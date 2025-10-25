import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-0 md:justify-between md:items-start bg-gray-800 p-8 rounded-lg ">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AuraAttire"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className=" hidden p-2 md:block text-lg font-medium text-white tracking-wider trendloom-font">TRENDLOOM</p>
        </Link>
        <p className="text-xs text-gray-400">© 2025 TRENDLOOM</p>
        <p className="text-xs text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Services</Link>
        <Link href="/">Privacy Policy</Link>

      </div>
      <div className="flex flex-col gap-4 items-center text-gray-400 text-sm md:items-start">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="/">All Product</Link>
        <Link href="/">New Arrival</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>       
      </div>
      <div className="flex flex-col gap-4 items-center text-gray-400 text-sm md:items-start">
        <p className="text-sm text-amber-50">Company</p>
        <Link href="/">About</Link>
        <Link href="/">contact</Link>
        <Link href="/">blog</Link>
        <Link href="/">Affiliate Program</Link>       
      </div>
    </div>
  );
};

export default Footer;
