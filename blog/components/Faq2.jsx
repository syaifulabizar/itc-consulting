"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQ
          </h2>
          <p className="md:text-md">
            Temukan jawaban atas pertanyaan umum tentang blog dan konten yang
            kami tawarkan.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu SEO?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              SEO atau Search Engine Optimization adalah proses meningkatkan
              visibilitas situs web di mesin pencari. Dengan menerapkan teknik
              SEO yang tepat, Anda dapat menarik lebih banyak pengunjung ke
              situs Anda. Ini melibatkan penggunaan kata kunci, optimasi konten,
              dan membangun tautan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu Email Automation?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Email Automation adalah teknik yang memungkinkan pengiriman email
              secara otomatis kepada pelanggan. Ini membantu bisnis dalam
              mengelola komunikasi dan meningkatkan keterlibatan. Dengan Email
              Automation, Anda dapat mengirim pesan yang relevan pada waktu yang
              tepat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Mengapa pentingnya Cloud?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Cloud computing memungkinkan akses data dan aplikasi dari mana
              saja. Ini meningkatkan fleksibilitas dan efisiensi operasional
              bisnis. Dengan menggunakan layanan cloud, perusahaan dapat
              mengurangi biaya infrastruktur TI.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu IT Consulting?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              IT Consulting adalah layanan yang membantu perusahaan dalam
              merencanakan dan mengimplementasikan solusi teknologi. Konsultan
              TI memberikan wawasan dan strategi untuk meningkatkan efisiensi
              dan efektivitas. Mereka juga membantu dalam mengatasi tantangan
              teknologi yang dihadapi perusahaan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Bagaimana cara menghubungi?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Anda dapat menghubungi kami melalui formulir kontak di situs ini.
              Tim kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk
              menghubungi kami kapan saja.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Masih ada pertanyaan?
          </h4>
          <p className="md:text-md">
            Kami siap membantu Anda dengan pertanyaan lebih lanjut.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontak" variant="secondary">
              Kontak
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
