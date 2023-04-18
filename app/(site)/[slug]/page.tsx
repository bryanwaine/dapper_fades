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
    <div className="max-w-5xl mx-auto px-10">
      <div className="h-64"></div>
      
      <h1 className="font-bold text-gray-700 text-3xl">
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
             className="flex flex-col items-center border border-none bg-white rounded-lg p-3 shadow-[0px_0px_20px_10px_#cbd5e0] hover:scale-105 hover:border-blue-500 transition"
           >
             {project.image && (
               <Image
                 src={project.image}
                 alt={project.alt}
                 width={350}
                 height={50}
                 className="object-cover rounded-lg border border-gray-500"
               />
             )}
             <div className="font-extrabold py-3 bg-gradient-to-r from-gray-900 via-stone-600 to-orange-600 bg-clip-text text-transparent">
               {project.name}
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
