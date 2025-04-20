"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portofolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Proyek Unggulan Kami
          </h2>
          <p className="md:text-md">
            Berikut adalah beberapa proyek yang telah kami selesaikan.
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:gap-x-12">
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Sistem Manajemen</a>
              </h3>
              <p>
                Pengembangan sistem manajemen untuk meningkatkan efisiensi
                operasional perusahaan.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Manajemen Proyek</a>
                </Badge>
                <Badge>
                  <a href="#">Sistem Informasi</a>
                </Badge>
                <Badge>
                  <a href="#">Efisiensi Bisnis</a>
                </Badge>
              </div>
              <Button
                title="Lihat proyek"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat proyek</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Aplikasi Mobile</a>
              </h3>
              <p>
                Aplikasi mobile yang dirancang untuk meningkatkan interaksi
                pengguna.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Aplikasi Mobile</a>
                </Badge>
                <Badge>
                  <a href="#">Pengembangan Software</a>
                </Badge>
                <Badge>
                  <a href="#">Interaksi Pengguna</a>
                </Badge>
              </div>
              <Button
                title="Lihat proyek"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat proyek</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Website E-Commerce</a>
              </h3>
              <p>
                Pengembangan website e-commerce untuk meningkatkan penjualan
                online.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">E-Commerce</a>
                </Badge>
                <Badge>
                  <a href="#">Pengembangan Web</a>
                </Badge>
                <Badge>
                  <a href="#">Peningkatan Penjualan</a>
                </Badge>
              </div>
              <Button
                title="Lihat proyek"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat proyek</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Sistem Keuangan</a>
              </h3>
              <p>
                Sistem keuangan yang terintegrasi untuk pengelolaan keuangan
                yang lebih baik.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Sistem Keuangan</a>
                </Badge>
                <Badge>
                  <a href="#">Keuangan Terintegrasi</a>
                </Badge>
                <Badge>
                  <a href="#">Pengelolaan Keuangan</a>
                </Badge>
              </div>
              <Button
                title="Lihat proyek"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">Lihat proyek</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-6 flex justify-center md:mt-8">
          <Button title="Lihat semua" variant="secondary" size="primary">
            Lihat semua
          </Button>
        </div>
      </div>
    </section>
  );
}
