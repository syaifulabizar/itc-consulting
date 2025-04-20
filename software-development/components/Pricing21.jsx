"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing21() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Paket</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Rencana Harga
          </h1>
          <p className="md:text-md">
            Temukan paket terbaik untuk kebutuhan pengembangan Anda.
          </p>
        </div>
        <div className="w-full">
          <div className="sticky top-0 grid grid-cols-3 border-b border-border-primary bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="hidden md:block" />
            <div className="flex h-full flex-col justify-between border-0 border-border-primary px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md leading-[1.4] font-bold md:text-xl">
                  Dasar
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl leading-[1.2] font-bold sm:text-6xl md:text-9xl lg:text-10xl">
                    $19
                  </p>
                  <p className="font-bold">Per bulan</p>
                </div>
                <p>Cocok untuk usaha kecil.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Mulai sekarang"
                  className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                >
                  Mulai sekarang
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md leading-[1.4] font-bold md:text-xl">
                  Bisnis
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl leading-[1.2] font-bold sm:text-6xl md:text-9xl lg:text-10xl">
                    $29
                  </p>
                  <p className="font-bold">Per bulan</p>
                </div>
                <p>Ideal untuk perusahaan menengah.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Mulai sekarang"
                  className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                >
                  Mulai sekarang
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md leading-[1.4] font-bold md:text-xl">
                  Perusahaan
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl leading-[1.2] font-bold sm:text-6xl md:text-9xl lg:text-10xl">
                    $49
                  </p>
                  <p className="font-bold">Per bulan</p>
                </div>
                <p>Solusi lengkap untuk bisnis besar.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Mulai sekarang"
                  className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                >
                  Mulai sekarang
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md leading-[1.4] font-bold md:text-xl">
              Kategori Fitur
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Pengembangan Aplikasi Web
            </p>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              Tidak terbatas
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Dukungan Pelanggan 24/7
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Pembaruan Rutin
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Integrasi Sistem
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Analisis Kinerja
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md leading-[1.4] font-bold md:text-xl">
              Kategori Fitur
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Pengembangan Mobile
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Tidak terbatas
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Desain Responsif
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Fitur Keamanan Tinggi
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Pengujian Kualitas
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Dokumentasi Lengkap
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md leading-[1.4] font-bold md:text-xl">
              Kategori Fitur
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Pengembangan Backend
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Tidak terbatas
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Pengembangan Frontend
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Optimasi SEO
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Analisis Data
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Integrasi API
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
