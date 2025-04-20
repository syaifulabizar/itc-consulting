"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Pengembangan Front-End: Menciptakan Antarmuka yang Menarik dan
              Responsif
            </h1>
            <p className="md:text-md">
              Pengembangan Front-End adalah proses merancang dan membangun
              antarmuka pengguna yang interaktif. Dengan fokus pada pengalaman
              pengguna, kami memastikan bahwa aplikasi Anda tidak hanya
              berfungsi dengan baik tetapi juga menarik secara visual.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
