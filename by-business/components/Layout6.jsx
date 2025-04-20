"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Layanan Konsultasi IT yang Meningkatkan Pertumbuhan Bisnis Anda
              Secara Signifikan
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Kami menawarkan solusi yang disesuaikan untuk startup dan
              perusahaan besar. Dengan keahlian dalam kecerdasan buatan dan
              implementasi sistem, kami siap membantu Anda mencapai tujuan
              bisnis.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Kecerdasan Buatan
                </h6>
                <p>
                  Kami mengembangkan solusi AI yang meningkatkan efisiensi dan
                  inovasi dalam bisnis Anda.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Implementasi Sistem
                </h6>
                <p>
                  Tim kami siap membantu Anda dalam mengimplementasikan sistem
                  yang tepat untuk kebutuhan bisnis.
                </p>
              </div>
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
