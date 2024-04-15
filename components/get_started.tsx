import Link from "next/link";
import { Particles } from "./particles";
import { ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator";
import Pricing from "./pricing";

export const GetStarted = () => {
  return (
    <div className="flex justify-center text-center">
      <div className=" pt-20 max-w-5xl" id="get_started">
        <Particles className="absolute inset-0 -z-10" />
        <div className="text-center px-8">
          <h1
            className="pb-4 font-extrabold tracking-tight text-transparent  text-4xl  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 lg:text-5xl"
            data-aos="fade-down"
          >
            Ready to Transform Your Idea?
          </h1>
          <p
            className="mb-8 text-lg text-zinc-300/40 font-medium"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Lets find the perfect Solution for you!
          </p>
        </div>
        <Pricing />
        <div className="flex items-center justify-center">
          <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
          <br />
        </div>
        <h1
          className="flex justify-center pb-4 font-extrabold tracking-tight text-transparent text-2xl lg:text-3xl  bg-clip-text bg-gradient-to-r from-white to-white/90"
          data-aos="fade-down"
          data-aos-delay="1000"
        >
          Still not sure?
        </h1>
        <div
          className="mb-6 text-center "
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link
              className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
              href="https://calendly.com/eliasnau09/30min"
              target="_blank"
            >
              <span className="relative inline-flex items-center">
                Contact us{" "}
                <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
