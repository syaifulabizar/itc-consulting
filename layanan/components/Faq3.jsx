"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQ
          </h2>
          <p className="md:text-md">
            Temukan jawaban atas pertanyaan umum tentang layanan kami di sini.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontak" variant="secondary">
              Kontak
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu SEO?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              SEO atau Search Engine Optimization adalah proses untuk
              meningkatkan visibilitas website di mesin pencari. Dengan
              menerapkan teknik SEO yang tepat, website Anda dapat muncul di
              halaman pertama hasil pencarian. Ini membantu menarik lebih banyak
              pengunjung dan meningkatkan peluang konversi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu Email Automation?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Email Automation adalah teknik yang memungkinkan pengiriman email
              secara otomatis kepada pelanggan. Ini membantu dalam menjaga
              komunikasi yang konsisten dan personal dengan audiens Anda. Dengan
              menggunakan alat ini, Anda dapat menghemat waktu dan meningkatkan
              efisiensi pemasaran.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu Cloud Computing?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Cloud Computing adalah layanan yang memungkinkan penyimpanan dan
              pengelolaan data melalui internet. Ini memberikan fleksibilitas
              dan skalabilitas bagi bisnis tanpa perlu investasi besar dalam
              infrastruktur. Dengan cloud, Anda dapat mengakses data kapan saja
              dan di mana saja.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu IT Consulting?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              IT Consulting adalah layanan yang membantu bisnis dalam
              merencanakan dan mengimplementasikan solusi teknologi informasi.
              Konsultan IT memberikan saran berdasarkan kebutuhan spesifik
              perusahaan untuk meningkatkan efisiensi operasional. Dengan
              bantuan mereka, Anda dapat membuat keputusan teknologi yang lebih
              baik.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Apa itu Mobile App?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Mobile App Development adalah proses pembuatan aplikasi untuk
              perangkat mobile seperti smartphone dan tablet. Aplikasi ini
              dirancang untuk memberikan pengalaman pengguna yang optimal dan
              dapat diakses kapan saja. Dengan aplikasi mobile, bisnis Anda
              dapat menjangkau pelanggan dengan lebih efektif.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
