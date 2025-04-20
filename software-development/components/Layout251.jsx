"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout251() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Inovasi</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Solusi Terdepan dalam Pengembangan Perangkat Lunak
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Pengembangan Back-End adalah fondasi dari setiap aplikasi yang
              kuat. Kami menciptakan sistem yang efisien dan dapat diandalkan
              untuk mendukung semua fungsi aplikasi Anda. Sementara itu,
              pengembangan aplikasi mobile memungkinkan bisnis Anda menjangkau
              pengguna di mana saja, kapan saja.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Keunggulan Back-End Development untuk Bisnis Anda
            </h3>
            <p>Kami membangun arsitektur yang scalable dan aman.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Manfaat Mobile App Development untuk Pengguna Anda
            </h3>
            <p>
              Aplikasi mobile kami dirancang untuk pengalaman pengguna yang
              optimal.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Mengapa Memilih Kami untuk Pengembangan Software?
            </h3>
            <p>Kami mengutamakan kualitas dan inovasi dalam setiap proyek.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Pelajari</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Daftar
          </Button>
        </div>
      </div>
    </section>
  );
}
