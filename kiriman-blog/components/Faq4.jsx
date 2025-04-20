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

export function Faq4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQ
          </h2>
          <p className="md:text-md">
            Temukan jawaban atas pertanyaan umum tentang blog kami di sini.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <Card>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                Apa itu blog ini?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Blog ini adalah sumber informasi tentang layanan dan solusi IT
                kami. Kami membahas berbagai topik terkait teknologi dan
                pemasaran. Tujuannya adalah untuk membantu pembaca memahami
                lebih dalam tentang dunia digital.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                Bagaimana cara berlangganan?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Anda dapat berlangganan dengan mengisi formulir yang tersedia di
                situs kami. Setelah itu, Anda akan menerima pembaruan terbaru
                melalui email. Pastikan untuk memeriksa folder spam jika tidak
                menerima email.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                Siapa penulis blog?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Blog ini ditulis oleh tim ahli kami yang berpengalaman di bidang
                IT dan pemasaran. Setiap penulis memiliki keahlian khusus untuk
                memberikan informasi yang akurat dan bermanfaat. Kami
                berkomitmen untuk menyajikan konten berkualitas tinggi.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                Apakah ada biaya?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Akses ke blog kami sepenuhnya gratis. Anda dapat membaca semua
                artikel tanpa biaya. Kami percaya bahwa informasi seharusnya
                dapat diakses oleh semua orang.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                Bagaimana cara menghubungi?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Anda dapat menghubungi kami melalui formulir kontak di situs
                ini. Kami akan merespons pertanyaan Anda secepat mungkin. Jangan
                ragu untuk bertanya jika ada yang ingin Anda ketahui lebih
                lanjut.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Masih ada pertanyaan?
          </h4>
          <p className="md:text-md">Kami siap membantu Anda!</p>
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
