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
    <div className="max-w-5xl mx-auto">
      <h1 className="font-bold text-gray-700 text-3xl">
        <span className="bg-gradient-to-r from-gray-800 via-stone-600 to-orange-600 bg-clip-text text-transparent">
          {project.name}
        </span>
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Image
          src={project.image}
          alt={project.alt}
          width={350}
          height={50}
          className="object-cover rounded-lg border border-gray-500 shadow-[0px_0px_20px_10px_#cbd5e0]"
              />
              <div>
                  <PortableText value={project.content} />
              </div>
      </div>
    </div>
  );
}
