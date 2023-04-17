import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto">
      <h2 >
        <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-stone-600 to-orange-600 bg-clip-text text-transparent " id="#">Services</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
