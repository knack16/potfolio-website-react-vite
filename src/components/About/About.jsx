import React from "react";

function About() {
  return (
   <section className="bg-gradient-to-b from-blue-50 via-white to-gray-100 text-black py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          About Me
        </h2>

        {/* Intro & Paragraphs */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <span className="font-bold text-orange-600">Hello there!</span> I'm{" "}
            <span className="font-bold">Shubham</span>, a passionate and versatile Full Stack Engineer
            with a deep-seated belief that technology should solve real-world
            problems. My journey has been one of relentless curiosity and
            continuous growth, earning me the moniker of an{" "}
            <span className="italic font-semibold text-blue-600">
              "Absolute Learning Machine."
            </span>
          </p>

          <p>
            I'm driven by a triple passion: making complex systems simple,
            enhancing user experiences, and building resilient, secure digital
            infrastructures. With expertise across frontend (React), backend
            (.NET, SQL, Azure), and Android, I transform business needs into
            elegant, high-performing digital products.
          </p>

          <p>
            What defines my approach is the synergy between development and
            security. My unexpected but intentional dive into cybersecurity
            shaped how I build — secure, robust, and optimized from day one.
          </p>

          <p>
            Outside of tech, I find joy in the simple things:{" "}
            <span className="italic">movies, night rides, games like basketball and chess,</span> and
            cruising on my bike under starry skies.
          </p>

          <p>
            My vision is to build and lead a dynamic tech team capable of
            delivering exceptional solutions across domains. I thrive in
            collaborations with like-minded innovators and mission-driven
            organizations.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
               { name: "React", src: "/assets/React-icon.svg.png" },
              { name: "Git", src: "/assets/Git-logo.svg.png" },
              { name: "Tailwind", src: "/assets/Tailwind_CSS_Logo.svg.png" },
              { name: "Vercel", src: "/assets/Vercel_logo_2025.svg.png" },
              { name: "Node.js", src: "/assets/nodejs-logo.svg" },
              { name: ".NET", src: "/assets/download.png" },
              { name: "Azure", src: "/assets/azure-1.svg" },
              { name: "MySQL", src: "/assets/logo-mysql-170x115.png" },
              {
                name: "Redis",
                src: "/assets/130-1307069_redis-logo-image-sizes-redis-db.png",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="w-16 h-16 flex items-center justify-center bg-orange-50 border border-gray-300 rounded-lg p-2 shadow-sm hover:scale-105 transition-transform duration-200"
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
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-16">
          <p className="text-xl font-medium">
            Let’s connect, build, and solve real problems — together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
