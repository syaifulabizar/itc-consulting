"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Kontak</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Hubungi Kami
          </h2>
          <p className="md:text-md">
            Kami siap membantu Anda dengan pertanyaan apa pun.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Email
              </h3>
              <p className="mb-2">Kirim email kepada kami</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Telepon
              </h3>
              <p className="mb-2">Hubungi kami segera</p>
              <a className="underline" href="#">
                +62 21 1234 5678
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Kantor
              </h3>
              <p className="mb-2">Jl. Contoh No. 123, Jakarta 12345</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Dapatkan Petunjuk"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Dapatkan Petunjuk
                </Button>
              </div>
            </div>
          </div>
          <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
