import Image from "next/image";
import "../globals.css";
import logo from "../../public/Dapper_Fades.png";
import bg from "../../public/bg-clipper.png";
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
        <nav className="flex justify-center items-center w-full h-48 max-w-auto mx-auto bg-transparent drop-shadow-md p-5">
          <div className="flex justify-around items-center bg-orange-500 w-1/6 h-12 shadow-md">
            <Link href={"/"} className="font-bold text-xl hover:text-white active:text-white">
              Home
            </Link>
            <Link href={"#"} className="font-bold text-xl hover:text-white active:text-white">
              Services
            </Link>
          </div>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Dapper Fades"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <div className="flex justify-around items-center bg-orange-500 w-1/6 h-12 shadow-md">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="font-bold text-xl hover:text-white active:text-white">
                {page.title}
              </Link>
            ))}
          </div>
        </nav>
        <main className="m-10">{children}</main>
      </body>
    </html>
  );
}
