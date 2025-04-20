"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Kami siap membantu Anda, hubungi kami sekarang!
            </h1>
            <p className="md:text-md">
              Kami di sini untuk menjawab setiap pertanyaan Anda. Jangan ragu
              untuk menghubungi kami melalui informasi kontak di bawah ini.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Hubungi">Hubungi</Button>
              <Button title="Kembali" variant="secondary">
                Kembali
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
