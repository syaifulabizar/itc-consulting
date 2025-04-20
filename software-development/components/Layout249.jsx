"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout249() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Aplikasi</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Kembangkan Aplikasi Mobile yang Inovatif
            </h2>
            <p className="md:text-md">
              Pengembangan aplikasi mobile adalah kunci untuk menjangkau
              pelanggan di era digital. Dengan solusi yang tepat, Anda dapat
              meningkatkan interaksi dan kepuasan pengguna.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Manfaat Pengembangan Aplikasi Mobile
            </h3>
            <p>
              Aplikasi mobile meningkatkan aksesibilitas dan kenyamanan bagi
              pengguna.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Contoh Proyek Sukses Kami
            </h3>
            <p>
              Kami telah mengembangkan aplikasi untuk berbagai industri,
              termasuk e-commerce dan kesehatan.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Hubungi Kami untuk Solusi Aplikasi Mobile
            </h3>
            <p>Tim kami siap membantu Anda mewujudkan ide aplikasi Anda.</p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          <Button variant="secondary">Pelajari</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Daftar
          </Button>
        </div>
      </div>
    </section>
  );
}
