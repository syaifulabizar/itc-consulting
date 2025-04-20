"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout250() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Pengembangan Perangkat Lunak yang Inovatif dan Solutif untuk
              Bisnis Anda
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Solusi Pengembangan Aplikasi Web yang Responsif dan Efisien
            </h3>
            <p>
              Kami menyediakan layanan pengembangan aplikasi web yang dirancang
              untuk memenuhi kebutuhan spesifik bisnis Anda.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Pelajari
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Pengembangan Perangkat Lunak Perusahaan untuk Meningkatkan
              Efisiensi Operasional
            </h3>
            <p>
              Solusi perangkat lunak perusahaan kami membantu Anda
              mengoptimalkan proses bisnis secara keseluruhan.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Pelajari
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Pengembangan Aplikasi Mobile untuk Mencapai Pengguna di Mana Saja
            </h3>
            <p>
              Aplikasi mobile kami dirancang untuk memberikan pengalaman
              pengguna yang luar biasa dan fungsional.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Pelajari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
