import React from "react";
import { Link } from "react-router-dom";
import Image from '../asset';

function Home() {
  return (
    <div className="relative bg-white w-full max-w-7xl mx-auto ">
      <aside className="relative flex flex-col-reverse sm:flex-row items-center sm:justify-between px-4 py-20 sm:px-12">
        {/* Left Text Section */}
        <div className="text-center sm:text-left z-10 ">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Hi, I am Shubham Tanawade
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-medium">
            Full Stack Engineer | Absolute Learning Machine
          </p>

          {/* Tech Logos */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
            {[
              { name: "React", src: "src/assets/React-icon.svg.png" },
              { name: "Git", src: "src/assets/Git-logo.svg.png" },
              { name: "Tailwind", src: "src/assets/Tailwind_CSS_Logo.svg.png" },
              { name: "Vercel", src: "src/assets/Vercel_logo_2025.svg.png" },
              { name: "Node.js", src: "src/assets/nodejs-logo.svg" },
              { name: ".NET", src: "src/assets/download.png" },
              { name: "Azure", src: "src/assets/azure-1.svg" },
              { name: "MySQL", src: "src/assets/logo-mysql-170x115.png" },
              {
                name: "Redis",
                src: "src/assets/130-1307069_redis-logo-image-sizes-redis-db.png",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg shadow-sm p-2 hover:scale-105 transition-transform duration-200"
                title={tech.name}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="/contactUs" // Replace with "#contact" or "mailto:..." as needed
              className="px-6 py-3 rounded-md bg-orange-700 text-white font-semibold shadow-md hover:bg-orange-900 transition-colors duration-200 text-center"
            >
              Get in Touch
            </a>

            <a
              href="src\assets\Shubham Tanawade Resume FS.pdf" // Make sure this file exists in your public/assets
              download
              className="px-6 py-3 rounded-md border border-orange-700 text-orange-700 font-semibold hover:text-white hover:bg-orange-700 transition-colors duration-200 text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative z-0 w-64 h-64 sm:w-80 sm:h-80 mb-10 sm:mb-0 ">
          {/* Orange Decorative Background Blob */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-orange-300 via-orange-400 to-orange-500 rounded-full blur-3xl opacity-70 animate-pulse"></div>

          <img
            src={Image.profilePhoto}
            alt="Profile"
            className="relative z-10 rounded-full object-cover w-full h-full shadow-xl border-4 border-white"
          />
        </div>
      </aside>
    </div>
  );
}

export default Home;
