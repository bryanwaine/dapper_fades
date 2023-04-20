import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-5xl mx-auto px-10">
      <div className="h-64"></div>
      <h1 className="w-full flex justify-center items-center font-bold text-gray-700 text-3xl">
        <span className="bg-gradient-to-r from-gray-800 via-stone-600 to-orange-600 bg-clip-text text-transparent">
          {project.name}
        </span>
      </h1>

      <div className="mt-10 flex justify-center items-center ">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-3 pt-3 pb-10">
          {project.image && (
            <Image
              src={project.image}
              alt={project.alt}
              width={350}
              height={50}
              className="object-cover rounded-2xl shadow-[0px_0px_20px_10px_#cbd5e0]"
            />
          )}
          <div className="w-full flex flex-col justify-center items-center borderborder-black rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm w-46 md:bg-transparent min-h-full mt-5 md:ml-20 px-2 py-10">
            <div className="bg-gradient-to-r from-gray-800 via-stone-600 to-orange-600 bg-clip-text text-transparent font-bold">
              Description
            </div>
            <div className="flex justify-center items-center text-center py-3 mb-5 border-none hover:border-none">
              <PortableText value={project.content} />
            </div>
            <div className="bg-gradient-to-r from-gray-800 via-stone-600 to-orange-600 bg-clip-text text-transparent font-bold">
              Price
            </div>
            <div className="flex justify-center items-center text-center py-3 mb-5 border-none hover:border-none">
              &pound;{project.price}
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg p-3">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
