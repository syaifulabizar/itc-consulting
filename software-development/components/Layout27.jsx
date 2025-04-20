"use client";

import React from "react";

export function Layout27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Pengembangan Aplikasi Mobile: Solusi Inovatif untuk Kebutuhan
              Digital Anda
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Kami menawarkan layanan pengembangan aplikasi mobile yang
              dirancang khusus untuk memenuhi kebutuhan bisnis Anda. Dengan
              teknologi terkini, aplikasi kami membantu meningkatkan interaksi
              dan kepuasan pengguna.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Inovasi
                </h3>
                <p>Meningkatkan efisiensi bisnis melalui aplikasi mobile.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Kualitas
                </h3>
                <p>Aplikasi yang handal dan mudah digunakan.</p>
              </div>
            </div>
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
