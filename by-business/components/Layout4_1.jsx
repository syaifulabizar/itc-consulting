"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Konsultasi</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Layanan Konsultasi IT yang Terpercaya
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Kami menawarkan layanan konsultasi IT yang dirancang untuk
              membantu bisnis Anda mencapai tujuan teknologi. Dengan tim ahli
              kami, Anda akan mendapatkan solusi yang tepat dan efektif.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Analisis Kebutuhan
                </h6>
                <p>
                  Kami menganalisis kebutuhan bisnis Anda untuk solusi IT yang
                  optimal.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Implementasi Sistem
                </h6>
                <p>
                  Kami membantu dalam implementasi sistem yang sesuai dengan
                  kebutuhan perusahaan Anda.
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
