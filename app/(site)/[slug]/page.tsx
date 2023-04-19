import { getPage, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto px-10 pb-10">
      <div className="h-56"></div>

      <h1 className="w-full flex justify-center items-center font-bold text-gray-700 text-3xl">
        <span className="bg-gradient-to-r from-gray-800 via-stone-600 to-orange-600 bg-clip-text text-transparent">
          {page.title}
        </span>
      </h1>

      {/* SERVICES PAGE */}
      {page.slug === "services" && (
        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="#services"
        >
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="relative flex flex-col items-center justify-start px-3 pt-3 pb-10 hover:scale-105 hover:border-blue-500 transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={350}
                  height={50}
                  className="object-cover rounded-2xl shadow-[0px_0px_20px_10px_#cbd5e0]"
                />
              )}
              <div className="absolute bottom-0 flex justify-center items-center borderborder-black rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm w-36 h-24 px-2">
                <div className="flex justify-center items-center text-center font-extrabold py-3 border-none bg-gradient-to-r from-gray-900 via-stone-600 to-orange-600 bg-clip-text text-transparent hover:border-none">
                  {project.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* ABOUT PAGE */}
      {page.slug === "about" && (
        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="#services"
        >
          <div className="relative flex flex-col items-center justify-start px-3 pt-3 pb-10">
            {page.image && (
              <Image
                src={page.image}
                alt={page.alt}
                width={350}
                height={50}
                className="object-cover rounded-2xl shadow-[0px_0px_20px_10px_#cbd5e0]"
              />
            )}
            <div className="absolute bottom-0 flex flex-col justify-center items-center borderborder-black rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm w-36 h-24 px-2">
              <div className="flex justify-center items-center text-center font-extrabold py-3 border-none bg-gradient-to-r from-gray-900 via-stone-600 to-orange-600 bg-clip-text text-transparent hover:border-none">
                <PortableText value={page.content} />
              </div>
              <p className="font-bold">Barber</p>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT PAGE */}
      <div className="mt-10 grid grid-cols-1 gap-5">
        {page.slug === "contact" && (
          <div>
            <div className="w-full flex flex-col justify-center items-center text-center font-bold">
              <PortableText value={page.content} />
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-10">
              <div className="flex justify-center items-center bg-orange-600 rounded-full h-12 w-12 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <a href="mailto:waine.bryan@gmail.com?subject=Haircut Booking">
                waine.bryan@gmail.com
              </a>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-10">
              <div className="flex justify-center items-center bg-orange-600 rounded-full h-12 w-12 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  <path
                    fill-rule="evenodd"
                    d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <a href="sms:+447879144739?&body=Hi%20there%2E%20I%27d%20like%20to%20book%20a%20haircut%20appointment%2E">
                +447879144739
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
