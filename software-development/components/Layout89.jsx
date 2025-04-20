"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Inovasi</p>
            <h3 className="text-5xl leading-[1.2] font-bold md:text-7xl lg:text-8xl">
              Layanan Unggulan dalam Pengembangan Perangkat Lunak
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Kami menawarkan berbagai layanan pengembangan perangkat lunak yang
              dirancang untuk memenuhi kebutuhan bisnis Anda. Dari pengembangan
              aplikasi web yang responsif hingga solusi perangkat lunak
              perusahaan yang kompleks, tim ahli kami siap membantu. Dengan
              pendekatan yang berfokus pada klien, kami memastikan setiap proyek
              disesuaikan dengan tujuan Anda.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Pelajari" variant="secondary">
                Pelajari
              </Button>
              <Button
                title="Hubungi"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Hubungi
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
