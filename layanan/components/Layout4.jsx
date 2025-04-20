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
            <p className="mb-3 font-semibold md:mb-4">Manfaat</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Keunggulan Layanan Kami untuk Bisnis Anda
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Layanan kami dirancang untuk meningkatkan efisiensi dan
              efektivitas bisnis Anda. Dapatkan solusi yang tepat untuk setiap
              tantangan yang Anda hadapi.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Optimalisasi SEO
                </h6>
                <p>
                  Tingkatkan visibilitas online Anda dengan strategi SEO yang
                  terukur dan efektif.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Automasi Email
                </h6>
                <p>
                  Hemat waktu dan tingkatkan konversi dengan kampanye email yang
                  otomatis dan personal.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Pelajari" variant="secondary">
                Pelajari
              </Button>
              <Button
                title="Daftar"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Daftar
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
