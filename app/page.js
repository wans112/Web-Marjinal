"use client";

import Image from "next/image";
import ListAngkatan from "../components/section/ListAngkatan";
import LogoExplain from "@/components/section/LogoExplain";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function Home() {
  const [sejarahVisible, setSejarahVisible] = useState(false);

  function TypingText({ text, start, speed = 18, startDelay = 0 }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
      let interval;
      let timeout;
      if (start) {
        timeout = setTimeout(() => {
          interval = setInterval(() => {
            setIdx((i) => {
              if (i < text.length) return i + 1;
              if (interval) clearInterval(interval);
              return i;
            });
          }, speed);
        }, startDelay);
      } else {
        setIdx(0);
      }
      return () => {
        if (interval) clearInterval(interval);
        if (timeout) clearTimeout(timeout);
      };
    }, [start, startDelay, speed, text]);

    return (
      <p className="mb-4 text-muted-foreground">
        {text.slice(0, idx)}
        {idx > 0 && (
          <span className="inline-block w-1 h-5 align-middle bg-current ml-1 animate-pulse" />
        )}
      </p>
    );
  }
  return (
    <main
      className="h-screen overflow-y-auto bg-background text-foreground flex flex-col snap-y snap-mandatory"
      role="main"
    >
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-full flex-none flex items-center snap-start bg-cover bg-center bg-[url('/background-pmii.png')]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)' }} />

        <div className="container mx-auto px-6 py-24 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Hero text: animate children in sequence; whileInView with once:false allows repeated triggers */}
            <motion.div
              className="text-center md:text-left max-w-150"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.18 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.h1 className="text-3xl md:text-5xl font-bold mb-4" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                Rayon Marjinal
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-muted-foreground mb-6" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                Rayon Marjinal, terinspirasi dari kata Inggris "marginal", lahir untuk mengawal dan memberdayakan mereka yang terpinggirkan. Berakar dari pengalaman banyak anggota sebagai mantan anak jalanan, rayon ini berkomitmen pada pengembangan kader, kegiatan sosial, dan penguatan intelektual mahasiswa di Fakultas Ilmu Komputer Unusida.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

    {/* Logo Explain Section */}
    <LogoExplain />

    {/* Sejarah Section */}
      <motion.section
        id="sejarah"
        className="container mx-auto px-6 py-24 min-h-screen snap-start flex items-center justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        onViewportEnter={() => setSejarahVisible(true)}
        onViewportLeave={() => setSejarahVisible(false)}
      >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <motion.div className="w-80 h-80 md:w-150 md:h-150 relative overflow-hidden"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image src="/marjinal-logo.png" alt="Rayon Marjinal" fill style={{ objectFit: "contain" }} />
            </motion.div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sejarah Rayon Marjinal</h2>

            <TypingText
              text={
                "Pembahasan Deklarator Rayon Marjinal pada tahun 2015: masuknya PMII ke Universitas Nadhlatul Ulama Sidoarjo untuk melakukan pembahasan Komisariat Lintang Songo Unusida. Yang didampingi oleh pengurus cabang melakukan diskusi untuk mendeklaratorkan PMII Unusida."
              }
              start={sejarahVisible}
              speed={8}
              startDelay={100}
            />

            <TypingText
              text={
                "Setelah pembahasan dan penetapan ketua komisariat pertama, langsung digabung pembahasan 3 rayon di Unusida yaitu Rayon Marjinal, Rayon Talijagat, Rayon Songo Wolu pada tanggal 17 September 2016. Pada saat itu Rayon Marjinal mayoritas kaderisasi Fakultas Ilmu Komputer dan Fakultas Teknik."
              }
              start={sejarahVisible}
              speed={8}
              startDelay={1500}
            />

            <TypingText
              text={
                "Rayon Marjinal pada saat itu langsung melakukan pemilihan ketua pertama dan terpilihnya sahabat Yuvi sebagai ketua pertama Rayon Marjinal. Dan ada beberapa nama angkatan-angkatan PMII Rayon Marjinal dari tahun pertama hingga tahun sekarang."
              }
              start={sejarahVisible}
              speed={8}
              startDelay={3500}
            />
          </div>
        </div>
      </div>
  </motion.section>

    {/* Angkatan Section */}
    <ListAngkatan />
    </main>
  );
}
