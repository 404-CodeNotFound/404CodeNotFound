import Link from "next/link";
import { Particles } from "./particles";
import { ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator";

export const GetStarted = () => {
  return (
    <div className="flex justify-center">
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
          <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Plan 1 */}
            <div
              className="flex-grow bg-slate-900 rounded-xl p-6 flex flex-col items-center mr-4"
              style={{ maxWidth: "300px" }}
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <h2 className="text-2xl font-semibold mb-2">
                Landing Page <br></br>
                <span className="text-lg text-zinc-300/40 font-medium mb-0">
                  - or -
                </span>{" "}
                <br></br>
                <span className="mt-0">Custom Website</span>
              </h2>
              <p className="text-gray-500 mb-4">
                Create a stunning landing page to showcase your product or
                service.
              </p>
              <div className="mb-4">
                <span className="text-gray-500 text-xs">from </span>

                <span className="text-3xl font-semibold">$99</span>
              </div>
              <ul className="text-left mb-4">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Custom design & development
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Mobile responsive design
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Analytics integration
                </li>
              </ul>
              <div className="mb-8">
                <div className="relative inline-flex before:absolute before:inset-0">
                  <Link
                    className="px-3 py-2 text-base font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <span className="relative inline-flex items-center">
                      Choose Style{" "}
                      <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Plan 2 */}
            <div
              className="flex-grow bg-slate-900 rounded-xl p-6 flex flex-col items-center mr-4"
              style={{ maxWidth: "300px" }}
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <h2 className="text-2xl font-semibold mb-2">
                Serverside Backend
              </h2>
              <p className="text-gray-500 mb-4">
                Build a comprehensive Backend with all the features you need
              </p>
              <div className="mb-4">
                <span className="text-gray-500 text-xs">from </span>

                <span className="text-3xl font-semibold">$199</span>
              </div>
              <ul className="text-left mb-4">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Custom development
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Databases
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Custom features
                </li>
              </ul>
              <div className="mb-8">
                <div className="relative inline-flex before:absolute before:inset-0">
                  <Link
                    className="px-3 py-2 text-base font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <span className="relative inline-flex items-center">
                      Choose Style{" "}
                      <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Plan 3 */}

            <div
              className="flex-grow bg-slate-900 rounded-xl p-6 flex flex-col items-center border"
              style={{ maxWidth: "300px" }}
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-gradient-to-r from-red-400 to-yellow-500 text-white font-bold px-3 py-1 rounded-lg text-xs uppercase">
                Most Popular
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Full-stack Web App
              </h2>
              <p className="text-gray-500 mb-4">
                An incredible web application, Frontend and backend combined.
              </p>
              <div className="mb-4">
                <span className="text-gray-500 text-xs">from </span>
                <span className="text-3xl font-semibold">399 €</span>
              </div>
              <ul className="text-left mb-4">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Features included in the other Plans
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Payment gateway integration
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Ready to Launch your own application
                </li>
              </ul>
              <div>
                <div className="relative inline-flex before:absolute before:inset-0">
                  <Link
                    className="px-3 py-2 text-base font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <span className="relative inline-flex items-center">
                      Choose Style{" "}
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
