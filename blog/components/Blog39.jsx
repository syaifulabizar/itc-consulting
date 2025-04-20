"use client";

import { Button, Card } from "@relume_io/relume-ui";
import React from "react";

export function Blog39() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Artikel Terbaru dan Populer
            </h2>
            <p className="md:text-md">
              Temukan informasi terkini tentang teknologi dan konsultasi IT.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="mb-2 flex text-sm font-semibold">
                Teknologi
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Meningkatkan SEO untuk Bisnis Anda
                </h5>
              </a>
              <p>
                Pelajari cara meningkatkan visibilitas online Anda dengan
                strategi SEO yang efektif.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Rina S.</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="mb-2 flex text-sm font-semibold">
                Strategi
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Email Automation untuk Meningkatkan Penjualan
                </h5>
              </a>
              <p>
                Optimalkan kampanye pemasaran Anda dengan otomatisasi email yang
                tepat sasaran.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Budi A.</h6>
                  <div className="flex items-center">
                    <p className="text-sm">12 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">6 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="mb-2 flex text-sm font-semibold">
                Inovasi
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Mengimplementasikan AI dalam Bisnis Anda
                </h5>
              </a>
              <p>
                Temukan bagaimana AI dapat meningkatkan efisiensi operasional
                bisnis Anda.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Siti M.</h6>
                  <div className="flex items-center">
                    <p className="text-sm">13 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">7 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-end">
          <Button
            title="Lihat semua"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            Lihat semua
          </Button>
        </div>
      </div>
    </section>
  );
}
