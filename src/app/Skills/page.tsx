import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Charm } from "next/font/google";

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Skills() {
  return (
    <div className="rounded-3xl mt-10 mb-8 ">
      <h3
        className="text-center align-middle py-6 mt-8 bg-gray-100 hover:scale-110"
        style={{ fontFamily: "Charm", fontWeight: 700, fontSize: "48px" }}
      >
        My Skills
      </h3>
      <div className="container px-6 py-10 mx-auto text-center  ">
        <div className="flex gap-6 bg-yellow-100 justify-center">
          {/* card1 */}
          <div className=" py-3 w-72  shadow-yellow-500 shadow-xl border rounded-2xl hover:scale-110">
            <img src="/Assets/html.webp" alt="html" width={250} height={150} />

            <div className="card-body">
              <h2 className="card-title font-bold text-md">HTML</h2>
              <p>
                HTML is made up of a series of elements that use tags to tell a
                web browser how to display content.
              </p>
              <div className="card-actions justify-end">
                <a href="https://en.wikipedia.org/wiki/HTML">
                  <button
                    type="button"
                    className="my-4 p-2 text-black hover:text-gray-300 border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md px-4 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="card bg-base-100 py-3 w-72 shadow-xl border rounded-xl  shadow-yellow-500  hover:scale-110">
            <img src="/Assets/css.png" alt="css" width={250} height={150} />

            <div className="card-body">
              <h2 className="card-title font-bold text-md">CSS</h2>
              <p>
                CSS describes how elements should be rendered on screen, on paper,
                in speech, or on other media.
              </p>
              <div className="card-actions justify-end">
                <a href="https://en.wikipedia.org/wiki/CSS">
                  <button
                    type="button"
                    className="my-4 p-2 text-black hover:text-gray-300 border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md px-4 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="card bg-base-100 py-3 w-72 shadow-xl border rounded-xl  shadow-yellow-500  hover:scale-110">
            <img
              src="/Assets/t.png"
              alt="typescript"
              width={250}
              height={150}
            />

            <div className="card-body py-5 mt-0">
              <h2 className="card-title font-bold text-md">Typescript</h2>
              <p>
                TypeScript is a free and open-source high-level programming
                language.
              </p>
              <div className="card-actions justify-end">
                <a href="https://en.wikipedia.org/wiki/TypeScript">
                  <button
                    type="button"
                    className="my-4 p-2 text-black hover:text-gray-300 border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md px-4 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="card bg-base-100 py-3 w-72 shadow-xl border rounded-xl  shadow-yellow-500  hover:scale-110">
            <img src="/Assets/nextjs.jpeg" alt="nextjs" width={350} height={150} />

            <div className="card-body mt-10">
              <h2 className="card-title font-bold text-md">Next Js</h2>
              <p>
              Next.js is a React framework that enables several extra features,
              including server-side rendering and static rendering.
              </p>
              <div className="card-actions justify-end">
                <a href="https://en.wikipedia.org/wiki/Next.js">
                  <button
                    type="button"
                    className="my-4 p-2 text-black hover:text-gray-300 border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md px-4 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card5 */}
          <div className="card bg-base-100 py-3 w-72 shadow-xl border rounded-xl  shadow-yellow-500  hover:scale-110">
            <img
              src="/Assets/digi.jpg"
              alt="digital marketing"
              width={500}
              height={300}
            />

            <div className="card-body py-10 mt-5">
              <h2 className="card-title font-bold text-md mt-2">Digital Marketing</h2>
              <p>
              Digital marketing is the use of digital technologies to connect consumers with sellers to promote products or services.
              </p>
              <div className="card-actions justify-end  shadow-yellow-500">
                <a href="https://en.wikipedia.org/wiki/Digital_marketing">
                  <button
                    type="button"
                    className="my-4 p-2 text-black hover:text-gray-300 border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-md px-4 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
