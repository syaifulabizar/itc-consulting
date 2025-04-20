"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Maksimalkan Jangkauan Anda dengan Strategi Iklan Berbayar yang
              Efektif
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Iklan berbayar adalah cara yang efektif untuk menjangkau audiens
              yang lebih luas. Dengan strategi yang tepat, Anda dapat
              meningkatkan ROI dan mendapatkan hasil yang optimal.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Keunggulan Iklan
                </h6>
                <p>
                  Target audiens yang tepat untuk hasil yang lebih maksimal dan
                  efisien.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  ROI Tinggi
                </h6>
                <p>
                  Maksimalkan investasi Anda dengan analisis dan pengelolaan
                  yang cermat.
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
