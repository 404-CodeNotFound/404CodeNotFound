import React from "react";
import { CheckIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Pricing() {
  return (
    <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Plan 1 */}
      <div
        className="flex-grow bg-gray-900 rounded-xl p-6 flex flex-col items-center mr-4"
        style={{ maxWidth: "300px" }}
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h2 className="text-2xl font-semibold mb-2">
          Landing Page <br></br>
          {/* <span className="text-lg text-zinc-300/40 font-medium mb-0">
            - or -
          </span>{" "} */}
          <span className="mt-0">Custom Website</span>
        </h2>
        <p className="text-gray-500 mb-4">
          Create a stunning landing page to showcase your product or service.
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
        <Link
          className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-auto"
          href="#get_started"
        >
          Get Started{" "}
          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </Link>
      </div>
      {/* Plan 2 */}
      <div
        className="flex-grow bg-gray-900 rounded-xl p-6 flex flex-col items-center mr-4"
        style={{ maxWidth: "300px" }}
        data-aos="fade-down"
        data-aos-delay="600"
      >
        <h2 className="text-2xl font-semibold mb-2">Serverside Backend</h2>
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
        <Link
          className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-auto"
          href="#get_started"
        >
          Get Started{" "}
          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </Link>
      </div>
      {/* Plan 3 */}
      <div
        className="flex-grow bg-gray-900 rounded-xl p-6 flex flex-col items-center border"
        style={{ maxWidth: "300px" }}
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-gradient-to-r from-red-400 to-yellow-500 text-white font-bold px-3 py-1 rounded-lg text-xs uppercase">
          Most Popular
        </div>
        <h2 className="text-2xl font-semibold mb-2">Full-stack Web App</h2>
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
        <Link
          className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mt-auto"
          href="#get_started"
        >
          Get Started{" "}
          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default Pricing;
