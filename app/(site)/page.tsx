import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import icon from "../../public/icon.png";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="w-full h-full bg-cover">
        <video autoPlay loop playsInline disablePictureInPicture preload="auto">
          <source src="./video-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className=" p-10 flex flex-col items-center w-full">
        <h2 className="mt-10">
          <span className=" text-3xl font-bold bg-gradient-to-r from-gray-900 via-stone-600 to-orange-600 bg-clip-text text-transparent ">
            Services
          </span>
        </h2>

        <div
          className="w-full sm:w-1/2 lg:w-1/3 mt-10 flex flex-col justify-center items-center bg-stone-300 p-10 border-2 rounded-3xl bg-white bg-opacity-50 backdrop-blur-sm shadow-[0px_0px_20px_10px_#cbd5e0]"
        >
          <Image
            src={icon}
            alt="icon"
            width={50}
            height={50}
            className="object-cover"
          />
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="w-full flex flex-col items-center border border-none  transition"
            >
              <div className=" w-full flex justify-between items-center">
                <div className="font-extrabold py-3 border-none bg-gradient-to-r from-gray-900 via-stone-600 to-orange-600 bg-clip-text text-transparent">
                  {project.name}
                </div>
                <div className="py-3">&pound;{project.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
