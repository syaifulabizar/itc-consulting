"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Solusi Cloud Terintegrasi untuk Penyimpanan dan Manajemen Data
              yang Efisien
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Maksimalkan Potensi Data Anda dengan Teknologi Cloud Terdepan
            </h3>
            <p>
              Kami menyediakan solusi cloud yang aman dan scalable untuk
              kebutuhan bisnis Anda.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Pelajari
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Analisis Data yang Mendalam untuk Keputusan Bisnis yang Lebih Baik
            </h3>
            <p>
              Dengan analisis data berbasis cloud, tingkatkan strategi bisnis
              Anda secara signifikan.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Temukan
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Keamanan Data Terjamin dengan Solusi Cloud Kami yang Terpercaya
            </h3>
            <p>
              Lindungi informasi penting Anda dengan teknologi enkripsi dan
              keamanan terkini.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Hubungi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
