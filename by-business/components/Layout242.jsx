"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout242() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Solusi Cerdas untuk Meningkatkan Kinerja Bisnis Anda dengan AI
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Mengoptimalkan Proses Bisnis Anda dengan Teknologi Kecerdasan
                Buatan
              </h3>
              <p className="mb-5 md:mb-6">
                Layanan Artificial Intelligence kami membantu Anda mengambil
                keputusan yang lebih baik dan lebih cepat.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Pelajari
                </Button>
              </div>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Inovasi AI untuk Meningkatkan Efisiensi dan Produktivitas
              </h3>
              <p className="mb-5 md:mb-6">
                Kami menyediakan solusi AI yang dapat disesuaikan dengan
                kebutuhan spesifik bisnis Anda.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Hubungi
                </Button>
              </div>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Transformasi Digital dengan Kecerdasan Buatan yang Terdepan
              </h3>
              <p className="mb-5 md:mb-6">
                Dengan teknologi AI, kami membantu Anda menghadapi tantangan
                bisnis di era digital.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Dapatkan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
