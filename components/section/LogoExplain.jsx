"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export default function LogoExplain() {
    return (
        <section
            id="logo"
            aria-labelledby="logo-heading"
            className="w-full h-full min-h-screen snap-start flex items-center"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Section header */}
                <motion.header
                    className="mb-6 text-center md:text-left"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 id="logo-heading" className="text-3xl md:text-3xl font-bold text-center">
                        Makna Logo Marjinal
                    </h2>
                </motion.header>

                {/* Mobile: stacked; md+: three columns vertically filling available height */}
                <motion.div
                    className="flex flex-col md:flex-row gap-4 md:gap-6 h-64 md:h-[min(70vh,720px)]"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Left column: Warna & Pena (stacked, spaced) */}
                    <motion.div
                        className="flex-1 flex flex-col justify-between p-4 md:p-6 h-48 md:h-full"
                        initial={{ x: -24, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Warna</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Filosofi Gradasi Warna Merah Dan Hitam Tidak Luput Dari Logo Marjinal Yang
                                    Menggambarkan Keberanian Dan Kewibawaan Dari Kader Dan Anggota Rayon Yang
                                    Terkesan Elegant.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Pena</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Filosofi Dari Pena, Pena disini Dilambangkan Sebagai Karya Dimana Marjinal
                                    Haruslah Selalu Padat Akan Karya.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Middle: logo */}
                    <motion.div
                        className="flex-1 flex items-center justify-center rounded-md h-48 md:h-full"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="relative w-70 h-70 md:w-100 md:h-100">
                            <Image src="/marjinal-logo.png" alt="Marjinal Logo" fill style={{ objectFit: 'contain' }} />
                        </div>
                    </motion.div>

                    {/* Right column: Gunungan Wayang & Api */}
                    <motion.div
                        className="flex-1 flex flex-col justify-between p-4 md:p-6 h-48 md:h-full"
                        initial={{ x: 24, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Gunungan Wayang</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Filosofi Dari Gunungan Wayang Menggambarkan Karakter Natural Kader Rayon Yang
                                    Tidak Akan Melupakan Culture Dan Kearifan Lokal Yang Tidak Menyimpang Ajaran
                                    Ahlusunnah Wal Jamaah.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Api</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Filosofi Dari Api Menggambarkan Semangat Kader & Anggota Rayon Marjinal Yang
                                    Selalu Membara Di Setiap Saat.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}