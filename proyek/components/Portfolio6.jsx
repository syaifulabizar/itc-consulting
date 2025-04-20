"use client";

import { Badge, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portofolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Proyek Kami yang Terbaik
          </h2>
          <p className="md:text-md">
            Berikut adalah daftar proyek yang telah kami selesaikan.
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:gap-x-12">
          <article className="mb-12 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Sistem Manajemen</a>
            </h3>
            <p>
              Pengembangan sistem manajemen untuk meningkatkan efisiensi
              operasional perusahaan.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Sistem Informasi</a>
              </Badge>
              <Badge>
                <a href="#">Pengembangan Software</a>
              </Badge>
              <Badge>
                <a href="#">Konsultasi IT</a>
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
          </article>
          <article className="mb-12 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Aplikasi Mobile</a>
            </h3>
            <p>
              Pengembangan aplikasi mobile untuk meningkatkan interaksi
              pengguna.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Aplikasi Mobile</a>
              </Badge>
              <Badge>
                <a href="#">Pengembangan Web</a>
              </Badge>
              <Badge>
                <a href="#">Desain Responsif</a>
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
          </article>
          <article className="mb-12 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Sistem E-Commerce</a>
            </h3>
            <p>
              Membangun sistem e-commerce untuk meningkatkan penjualan online.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">E-Commerce</a>
              </Badge>
              <Badge>
                <a href="#">Pengembangan Web</a>
              </Badge>
              <Badge>
                <a href="#">Integrasi Sistem</a>
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
          </article>
          <article className="mb-12 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Sistem CRM</a>
            </h3>
            <p>
              Pengembangan sistem CRM untuk manajemen hubungan pelanggan yang
              lebih baik.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">CRM</a>
              </Badge>
              <Badge>
                <a href="#">Pengembangan Software</a>
              </Badge>
              <Badge>
                <a href="#">Konsultasi IT</a>
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
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="Lihat semua" variant="secondary" size="primary">
            Lihat semua
          </Button>
        </div>
      </div>
    </section>
  );
}
