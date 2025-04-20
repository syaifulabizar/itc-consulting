"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Tingkatkan Bisnis Anda dengan Marketing & Analytics
              </h1>
              <p className="md:text-md">
                Kami menawarkan solusi Marketing & Analytics yang dirancang
                untuk membantu bisnis Anda tumbuh dan berkembang. Dengan
                pendekatan yang terintegrasi, kami memastikan setiap strategi
                memberikan hasil yang maksimal.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Pelajari">Pelajari</Button>
                <Button title="Daftar" variant="secondary">
                  Daftar
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
