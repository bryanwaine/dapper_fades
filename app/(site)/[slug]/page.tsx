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
      <div className="h-64"></div>
      
      <h1 className="w-full flex justify-center items-center font-bold text-gray-700 text-3xl">
        <span className="bg-gradient-to-r from-gray-800 via-stone-600 to-orange-600 bg-clip-text text-transparent">
          {page.title}
        </span>
      </h1>
      {page.slug === 'services' && (
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {page.image && (
          <Image
            src={page.image}
            alt={page.alt}
            width={350}
            height={50}
            className="object-cover rounded-lg border border-gray-500 shadow-[0px_0px_20px_10px_#cbd5e0]"
          />
        )}

        <div>
          <PortableText value={page.content} />
        </div>
      </div>
    </div>
  );
}
