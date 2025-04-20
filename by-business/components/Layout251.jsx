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
            <p className="mb-3 font-semibold md:mb-4">Layanan</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Layanan Unggulan Kami untuk Bisnis Anda
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Kami menyediakan berbagai layanan yang dirancang untuk memenuhi
              kebutuhan bisnis Anda. Dari konsultasi IT hingga pengembangan
              perangkat lunak, kami siap membantu Anda mencapai tujuan. Temukan
              solusi yang tepat untuk meningkatkan efisiensi dan produktivitas
              bisnis Anda.
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
              Konsultasi untuk Startups dan Perusahaan Besar
            </h3>
            <p>Kami menawarkan layanan konsultasi IT yang komprehensif.</p>
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
              Solusi Kecerdasan Buatan untuk Bisnis Anda
            </h3>
            <p>Manfaatkan teknologi AI untuk meningkatkan keputusan bisnis.</p>
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
              Implementasi Sistem yang Efisien dan Tepat
            </h3>
            <p>Kami membantu Anda dalam implementasi sistem yang optimal.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Pelajari</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Hubungi
          </Button>
        </div>
      </div>
    </section>
  );
}
