import Image from "next/image";
import "../globals.css";
import logo from "../../public/Dapper_Fades.png";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Dapper Fades",
  description: "Mens Hair Styling Services",
};

export default async function RootLayout({
  children,
}: {
    children: React.ReactNode;
  }) {
  const pages = await getPages();
  
  return (
    <html lang="en">
      <body className="bg-cover bg-fixed bg-center bg-no-repeat" style={{ 
      backgroundImage: `url(/bg-clipper.png)`, 
      }}>
         <nav className="absolute flex flex-col justify-center items-center w-full h-48 max-w-auto mx-auto bg-transparent drop-shadow-md p-5">

          <div className="w-full sm:w-auto flex flex-col items-center">
            <Link href={"/"}>
            <Image
              src={logo}
              alt="Dapper Fades"
              width={150}
              height={50}
              className="object-contain m-5 sm:m-0"
            />
            </Link> 

            {/* Mobile Navbar */}
            <div className="relative flex bg-opacity-70 sm:hidden justify-around items-center bg-orange-400 w-full shadow-lg py-2">   
            
              {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="font-bold text-l text-white hover:text-black-600 ">
                {page.title}
              </Link>
            ))}
          </div>
          </div>
          
          <div className="hidden sm:flex justify-around items-center bg-orange-500 bg-opacity-70 sm:w-1/2 lg:w-1/4 h-12 shadow-lg mt-5 ">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="font-bold text-xl text-white hover:text-black m-5">
                {page.title}
              </Link>
            ))}
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}


