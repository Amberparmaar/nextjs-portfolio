import React from "react";
import Link from "next/link";
import Image from "next/image";

       export default function Navbar() {
          return (
            <div className=" bg-yellow-300 p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src="/Assets/logo.jpg" alt="Rounded avatar"/>

              <span className="text-xl font-bold text-gray-800">AMBER PARMAAR</span>
              </div>
              <ul className="flex space-x-4 font-semibold">
                <li><Link href="/" className="text-gray-800 hover:text-gray-500 transition duration-400">Home</Link></li>
                <li><Link href="../About" className="text-gray-800 hover:text-gray-500 transition duration-400">About Me</Link></li>
                <li><Link href="../Skills" className="text-gray-800 hover:text-gray-500 transition duration-400">Skills</Link></li>
                <li><Link href="../Contact" className="text-gray-800 hover:text-gray-500 transition duration-400">Contact Me</Link></li>
              </ul>
            </nav>
            </div>
            
          
          );
        }