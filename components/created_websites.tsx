import Link from "next/link";
import { Separator } from "./ui/separator";
import YouTube from "react-youtube";

export const CreatedWebsites = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
    width: "480",
    height: "270",
    className: "rounded-xl",
  };
  return (
    <div className="flex justify-center ">
      <div className="max-w-5xl">
        <div className="text-center">
          <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
            Websites we've created
          </h1>
          <div className="flex items-center justify-center">
            <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
          </div>

          <div className="flex justify-center">
            <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
              <img
                src="img/website.png"
                className="ring-white ring-2 rounded-xl"
              />
              <img
                src="img/website.png"
                className="ring-white ring-2 rounded-xl"
              />
              <img
                src="img/website.png"
                className="ring-white ring-2 rounded-xl"
              />
              <img
                src="img/website.png"
                className="ring-white ring-2 rounded-xl"
              />
            </div>
          </div>
          <div className="mb-6 mt-10">
            <div className="relative inline-flex before:absolute before:inset-0">
              <Link
                className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                href="/projects"
                target="_blank"
              >
                <span className="relative inline-flex items-center">
                  See more{" "}
                  <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
