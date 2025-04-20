"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Konsultasi</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Tingkatkan Kinerja Bisnis Anda dengan IT
            </h2>
            <p className="md:text-md">
              Konsultasi IT kami dirancang untuk membantu bisnis Anda mencapai
              efisiensi maksimal. Dengan pendekatan yang terpersonalisasi, kami
              memastikan solusi yang tepat untuk kebutuhan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Manfaat Konsultasi IT untuk Bisnis Anda
              </h3>
              <p>
                Konsultasi IT dapat meningkatkan produktivitas dan mengurangi
                biaya operasional.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Pendekatan Kami dalam Konsultasi IT
              </h3>
              <p>
                Kami menganalisis kebutuhan bisnis Anda untuk solusi yang
                optimal.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Siap untuk Meningkatkan Kinerja Bisnis Anda?
              </h3>
              <p>Hubungi kami untuk konsultasi gratis hari ini!</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Pelajari</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Hubungi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
