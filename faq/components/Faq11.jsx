"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq11() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              FAQ
            </h2>
            <p className="md:text-md">
              Berikut adalah beberapa pertanyaan umum tentang layanan kami yang
              sering diajukan.
            </p>
          </div>
        </div>
        <Accordion
          type="multiple"
          className="grid w-full grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2"
        >
          <Card>
            <AccordionItem
              value="item-faq11_accordion"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Apa itu SEO?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                SEO atau Search Engine Optimization adalah proses meningkatkan
                visibilitas website di mesin pencari. Dengan SEO yang tepat,
                website Anda dapat muncul di halaman pertama hasil pencarian.
                Ini membantu menarik lebih banyak pengunjung ke situs Anda.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-2"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Apa keuntungan email automation?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Email automation memungkinkan Anda mengirim email secara
                otomatis kepada pelanggan. Ini membantu dalam membangun hubungan
                yang lebih baik dan meningkatkan retensi pelanggan. Dengan
                strategi yang tepat, Anda dapat meningkatkan konversi penjualan.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-3"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Apa itu cloud computing?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Cloud computing adalah penyimpanan dan pengelolaan data melalui
                internet. Ini memungkinkan akses data dari mana saja dan kapan
                saja. Dengan cloud, Anda dapat mengurangi biaya infrastruktur
                IT.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-4"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Bagaimana cara kerja AI?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                AI atau Kecerdasan Buatan bekerja dengan memproses data besar
                untuk belajar dan membuat keputusan. Ini membantu dalam
                otomatisasi tugas dan analisis data yang kompleks. AI dapat
                meningkatkan efisiensi operasional bisnis.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-5"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Apa itu software development?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Software development adalah proses merancang, membangun, dan
                memelihara perangkat lunak. Ini mencakup berbagai aspek mulai
                dari pengembangan aplikasi hingga pemrograman backend. Tim kami
                ahli dalam menciptakan solusi perangkat lunak yang sesuai dengan
                kebutuhan bisnis Anda.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-6"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Apa manfaat IT consulting?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                IT consulting membantu bisnis memahami dan menerapkan teknologi
                dengan lebih efektif. Konsultan kami memberikan wawasan untuk
                meningkatkan efisiensi dan inovasi. Dengan strategi yang tepat,
                Anda dapat mencapai tujuan bisnis lebih cepat.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-7"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Bagaimana cara menghubungi kami?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Anda dapat menghubungi kami melalui formulir kontak di website.
                Tim kami siap menjawab pertanyaan Anda. Kami berkomitmen untuk
                memberikan layanan terbaik kepada pelanggan.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-8"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Apakah ada biaya?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Biaya layanan kami bervariasi tergantung pada jenis layanan yang
                Anda pilih. Kami menawarkan paket yang fleksibel untuk memenuhi
                kebutuhan bisnis Anda. Untuk informasi lebih lanjut, silakan
                hubungi tim kami.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-9"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Apa yang dimaksud dengan paid marketing?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Paid marketing adalah strategi pemasaran yang menggunakan iklan
                berbayar untuk menjangkau audiens. Ini termasuk iklan di media
                sosial dan mesin pencari. Dengan paid marketing, Anda dapat
                meningkatkan visibilitas dan menarik lebih banyak pelanggan.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-10"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Masih ada pertanyaan?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Jika Anda masih memiliki pertanyaan, jangan ragu untuk
                menghubungi kami. Kami siap membantu Anda dengan informasi yang
                Anda butuhkan. Tim kami akan segera merespons permintaan Anda.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Masih punya pertanyaan?
          </h4>
          <p className="md:text-md">
            Hubungi kami untuk informasi lebih lanjut.
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
