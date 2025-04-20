"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Automasi Email: Solusi Cerdas untuk Meningkatkan Efisiensi
              Pemasaran Anda
            </h1>
            <p className="md:text-md">
              Layanan Automasi Email kami membantu Anda mengirim pesan yang
              tepat kepada audiens yang tepat pada waktu yang tepat. Dengan
              strategi yang terintegrasi, Anda dapat meningkatkan keterlibatan
              pelanggan dan mengoptimalkan konversi secara signifikan.
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
