"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout245() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Inovasi</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Solusi Pengembangan Perangkat Lunak Terdepan
              </h2>
            </div>
            <div>
              <p className="md:text-md">
                Pengembangan Perangkat Lunak Perusahaan kami menawarkan solusi
                yang disesuaikan untuk memenuhi kebutuhan bisnis Anda. Dengan
                pengalaman dalam berbagai industri, kami memastikan perangkat
                lunak yang kami kembangkan efisien dan efektif. Kami berkomitmen
                untuk memberikan hasil yang dapat diandalkan dan berkualitas
                tinggi.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Pengembangan Perangkat Lunak Perusahaan (Es)
              </h3>
              <p>
                Kami menciptakan solusi perangkat lunak yang skalabel dan aman.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Pengembangan Aplikasi Web (Wa)
              </h3>
              <p>
                Aplikasi web kami dirancang untuk pengalaman pengguna yang
                optimal.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Pengembangan Front-End (Fe)
              </h3>
              <p>Tim kami ahli dalam menciptakan antarmuka yang menarik.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Pelajari</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
