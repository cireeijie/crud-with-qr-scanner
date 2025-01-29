"use client";

import CameraComponent from "@/components/camera";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="p-2 bg-[#1C5075]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Image
            className="dark:invert"
            src="/Logo.png"
            alt="NTC logo"
            width={60}
            height={20}
            priority
          />
          <div className="flex justify-end gap-4">
            <Link href="/login" className="text-white">
              Login
            </Link>
            <Link href="/registration" className="text-white">
              Registration
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <section className="max-w-[1200px] mx-auto flex items-center justify-center flex-col gap-4">
          <CameraComponent />
          <div className="flex justify-center items-center gap-4">
            <Button>Check in</Button>
            <Button variant="secondary">Check out</Button>
          </div>
        </section>
      </main>
      <footer className="p-2 bg-[#1C5075]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center">
          <p className="text-white">© 2025 NTC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
