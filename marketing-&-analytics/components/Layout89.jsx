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
            <p className="mb-3 font-semibold md:mb-4">Email</p>
            <h3 className="text-5xl leading-[1.2] font-bold md:text-7xl lg:text-8xl">
              Automatisasi Email untuk Keterlibatan Pelanggan
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Dengan Email Automation, Anda dapat mengirim kampanye email yang
              dipersonalisasi secara otomatis. Fitur ini membantu meningkatkan
              keterlibatan pelanggan dan memperkuat hubungan dengan audiens
              Anda. Ciptakan pengalaman yang lebih baik untuk pelanggan Anda
              dengan mengotomatiskan komunikasi yang relevan.
            </p>
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
