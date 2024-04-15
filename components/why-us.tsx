import Link from "next/link";
import { Separator } from "./ui/separator";
import YouTube from "react-youtube";
import { Meteors } from "./global/meteor";
import { BookCheck, HeartHandshake, Palette, Rocket } from "lucide-react";

export const WhyUs = () => {
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
          <div data-aos="fade-down">
            <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
              Why choose us?
            </h1>
            <div className="flex items-center justify-center">
              <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Card 1: Modern Design */}
            <div
              className="w-full relative max-w-xs"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 flex items-center justify-center mb-4 ">
                  <HeartHandshake className=" text-gray-300" />
                </div>
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Modern Design
                </h1>
                <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-left">
                  Our team specializes in crafting modern and visually stunning
                  websites that captivate your audience from the moment they
                  land on your page. With sleek designs and intuitive
                  navigation, we ensure that your website reflects the
                  professionalism and innovation of your brand.
                </p>

                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                  Explore
                </button>
                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>

            {/* Card 2: Reliability */}
            <div
              className="w-full relative max-w-xs"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 to-teal-500 transform scale-[0.50] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 flex items-center justify-center mb-4 ">
                  <BookCheck className=" text-gray-300" />
                </div>
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Trust & Reliability
                </h1>
                <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-left">
                  Trust is the foundation of our client relationships. With a
                  proven track record of delivering high-quality websites on
                  time and within budget, you can rely on us to bring your
                  vision to life. Our commitment to reliability means that you
                  can focus on your business while we take care of the rest.
                </p>

                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                  Explore
                </button>
                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>

            {/* Card 3: Another Reason */}
            <div
              className="w-full relative max-w-xs"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5  flex items-center justify-center mb-4">
                  <Rocket className=" text-gray-300" />
                </div>
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Expertise & Innovation
                </h1>
                <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-left">
                  Beyond our modern designs and reliability, what sets us apart
                  is our dedication to innovation. With a team of experts at the
                  forefront of web development trends, we bring fresh ideas and
                  cutting-edge solutions to every project. Partner with us to
                  stay ahead of the competition and leave a lasting impression
                  online.
                </p>

                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                  Explore
                </button>
                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
