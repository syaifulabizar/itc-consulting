"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Kontak</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Hubungi Kami
          </h2>
          <p className="md:text-md">
            Kami siap membantu Anda dengan pertanyaan apapun.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              Silakan kirim email untuk pertanyaan atau informasi lebih lanjut.
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Telepon
            </h3>
            <p className="mb-5 md:mb-6">
              Hubungi kami untuk dukungan teknis dan konsultasi.
            </p>
            <a className="underline" href="#">
              +62 (21) 123-4567
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Kantor
            </h3>
            <p className="mb-5 md:mb-6">
              Kami berlokasi di pusat kota untuk kemudahan akses.
            </p>
            <a className="underline" href="#">
              Jalan Contoh No. 123, Jakarta 10100, Indonesia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
