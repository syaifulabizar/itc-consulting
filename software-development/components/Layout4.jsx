"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Inovasi</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Pengembangan Perangkat Lunak Perusahaan yang Efisien
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Kami menyediakan solusi perangkat lunak yang dirancang khusus
              untuk memenuhi kebutuhan bisnis Anda. Dengan pendekatan yang
              terintegrasi, kami memastikan efisiensi dan efektivitas dalam
              setiap proyek.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Solusi Kustom
                </h6>
                <p>
                  Kami menciptakan perangkat lunak yang disesuaikan dengan
                  kebutuhan spesifik perusahaan Anda.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Tim Ahli
                </h6>
                <p>
                  Dapatkan dukungan dari tim profesional berpengalaman di bidang
                  pengembangan perangkat lunak.
                </p>
              </div>
            </div>
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
