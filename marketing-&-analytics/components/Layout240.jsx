"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout240() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Optimalkan visibilitas online Anda dengan strategi SEO yang efektif.
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Automasi email untuk meningkatkan keterlibatan pelanggan dan
              efisiensi pemasaran.
            </h3>
            <p>
              Paid Marketing membantu Anda menjangkau audiens yang lebih luas
              dengan cepat.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Pelajari
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Tingkatkan peringkat pencarian Anda dengan SEO yang terencana dan
              terukur.
            </h3>
            <p>
              Email Automation memungkinkan pengiriman pesan yang tepat waktu
              dan relevan.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Daftar
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Dapatkan hasil maksimal dari iklan berbayar untuk bisnis Anda.
            </h3>
            <p>
              Dengan Paid Marketing, Anda dapat mengukur ROI secara langsung.
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
