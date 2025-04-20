"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header9() {
  return (
    <section id="relume" className="flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="relative z-10 container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-6xl font-bold text-text-primary md:text-9xl lg:text-10xl">
                Optimalkan Bisnis Anda dengan Marketing & Analytics
              </h1>
            </div>
            <div>
              <p className="text-base text-text-primary md:text-md">
                Layanan Marketing & Analytics kami dirancang untuk meningkatkan
                visibilitas dan kinerja bisnis Anda. Dengan strategi SEO yang
                efektif dan otomatisasi email, kami membantu Anda menjangkau
                audiens yang tepat dan meningkatkan konversi.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Pelajari">Pelajari</Button>
                <Button title="Daftar" variant="secondary">
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
