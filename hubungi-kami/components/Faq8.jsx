"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQ
          </h2>
          <p className="md:text-md">
            Temukan jawaban untuk pertanyaan umum yang sering diajukan di sini.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontak" variant="secondary">
              Kontak
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Apa itu SEO?
            </h2>
            <p>
              SEO, atau optimisasi mesin pencari, adalah proses meningkatkan
              visibilitas situs web di hasil pencarian. Dengan SEO yang tepat,
              bisnis Anda dapat menjangkau lebih banyak pelanggan potensial. Ini
              melibatkan penggunaan kata kunci, konten berkualitas, dan teknik
              lainnya.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Apa itu Email Automation?
            </h2>
            <p>
              Email Automation adalah proses otomatisasi pengiriman email kepada
              pelanggan. Ini membantu dalam mengelola komunikasi dan
              meningkatkan keterlibatan pelanggan. Dengan sistem yang efisien,
              Anda dapat menghemat waktu dan meningkatkan efektivitas kampanye
              pemasaran.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Apa itu Cloud?
            </h2>
            <p>
              Cloud computing adalah penyimpanan dan pengelolaan data melalui
              internet. Ini memungkinkan akses data dari mana saja dan kapan
              saja. Dengan solusi cloud, bisnis dapat mengurangi biaya dan
              meningkatkan fleksibilitas.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Apa itu IT Consulting?
            </h2>
            <p>
              IT Consulting adalah layanan yang membantu perusahaan dalam
              merencanakan dan mengelola teknologi informasi. Konsultan IT
              memberikan wawasan dan strategi untuk meningkatkan efisiensi dan
              efektivitas. Ini mencakup analisis kebutuhan, implementasi sistem,
              dan pelatihan.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Bagaimana cara menghubungi?
            </h2>
            <p>
              Anda dapat menghubungi kami melalui formulir kontak di situs ini.
              Kami akan segera merespons pertanyaan Anda. Jangan ragu untuk
              bertanya tentang layanan yang kami tawarkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
