"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion } from "framer-motion";

const reviews = [
	{
		id: 1,
		href: '#',
		name: 'Angkatan Garuda Jawa',
		tahun: 2015,
		text: 'Nama Angkatan Pertama Pada Tahun 2015',
	},
	{
		id: 2,
		href: '#',
		name: 'Angkatan General',
		tahun: 2016,
		text: 'Nama Angkatan Kedua Setelah Angkatan Garuda Jawa Pada Tahun 2016',
	},
	{
		id: 3,
		href: '#',
		name: 'Angkatan Bara Merah',
		tahun: 2017,
		text: 'Nama Angkatan Ketiga Setelah Angkatan General pada Tahun 2017',
	},
	{
		id: 4,
		href: '#',
		name: 'Angkatan Brutal',
		tahun: '2018-2019',
		text: 'Nama Angkatan Keempat Setelah Angkatan Bara Merah Pada Tahun 2018-2019',
	},
	{
		id: 5,
		href: '#',
		name: 'Angkatan Dji Samsu',
		tahun: 2020,
		text: 'Nama Angkatan Kelima Setelah Angkatan Brutal Pada Tahun 2020',
	},
	{
		id: 6,
		href: '#',
		name: 'Angkatan Goal',
		tahun: 2021,
		text: 'Nama Angkatan keenam Setelah Angkatan Dji Samsu Pada Tahun 2021',
	},
	{
		id: 7,
		href: '#',
		name: 'Angkatan Seleb',
		tahun: 2022,
		text: 'Nama Angkatan Ketujuh Setelah Angkatan Goal Pada Tahun 2022',
	},
	{
		id: 8,
		href: '#',
		name: 'Angkatan Sakral',
		tahun: 2023,
		text: 'Nama Angkatan Kedelapan Setelah Angkatan Seleb Pada Tahun 2023',
	},
	{
		id: 9,
		href: '#',
		name: 'Angkatan Brutal',
		tahun: 2024,
		text: 'Nama Angkatan Kesembilan Setelah Angkatan Sakral Pada Tahun 2024',
	},
];

// Stars / rating removed — angkatan don't use ratings

export default function ListAngkatan() {
	const containerRef = useRef(null);
	const timelineRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const cards = container.querySelectorAll('.review-card');
		if (cards.length === 0) return;

		const cardWidth = cards[0].offsetWidth;
		const gap = 24; // 1.5rem gap
		const moveDistance = cardWidth + gap;

		// Create infinite scroll animation
		const createAnimation = () => {
			timelineRef.current = gsap.timeline({ repeat: -1 });
			
			timelineRef.current.to(container, {
				x: -moveDistance * reviews.length,
				duration: reviews.length * 4, // 4 seconds per card
				ease: "none"
			});

			timelineRef.current.set(container, { x: 0 });
		};

		createAnimation();

		// Slow down on hover (instead of pausing)
		const handleMouseEnter = () => {
			if (timelineRef.current) {
				// slow to 20% speed
				timelineRef.current.timeScale(0.2);
			}
		};

		const handleMouseLeave = () => {
			if (timelineRef.current) {
				// restore normal speed
				timelineRef.current.timeScale(1);
			}
		};

		container.addEventListener('mouseenter', handleMouseEnter);
		container.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			if (timelineRef.current) {
				timelineRef.current.kill();
			}
			container.removeEventListener('mouseenter', handleMouseEnter);
			container.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	// Create duplicated reviews for seamless loop
	const duplicatedReviews = [...reviews, ...reviews];

	return (
		// Section background is white to invert from the dark site theme.
		<section
			id="angkatan"
			className="w-full overflow-hidden min-h-screen snap-start flex items-center justify-center"
		>
			<div className="max-w-7xl mx-auto px-6 py-12">
				<motion.h2
					className="text-3xl sm:text-4xl font-extrabold mb-6 text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.2 }}
				>
					Nama-Nama Angkatan (2015 - 2024)
				</motion.h2>

				{/* Carousel container - allow visible overflow on small screens to avoid clipping scaled cards */}
				<motion.div
					className="relative overflow-visible px-4 sm:overflow-hidden sm:px-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.1 }}
				>
					<div
						ref={containerRef}
						className="flex gap-6 py-4"
						style={{ willChange: 'transform' }}
					>
						{duplicatedReviews.map((r, index) => (
							<article
								key={`${r.id}-${index}`}
								className="review-card flex-shrink-0 w-72 sm:w-80 md:w-96 h-50 transition-transform duration-300 hover:scale-105"
							>
								{/* Card inverted: black background, white text. Wrap in anchor so card is clickable */}
								<a href={r.href} className="block rounded-lg h-full">
									<Card className="h-full shadow-lg flex flex-col overflow-hidden">
										<CardHeader className="flex items-center gap-4">
											<div className="flex items-center gap-3">
												<div>
													<CardTitle className="text-base md:text-lg font-medium">
														{r.name}
													</CardTitle>
													<div className="text-sm text-muted-foreground">{r.tahun}</div>
													</div>
												</div>
											</CardHeader>

											<CardContent className="flex-1 overflow-hidden">
												<p className="text-base text-white/90">{r.text}</p>
											</CardContent>
										</Card>
									</a>
								</article>
							))}
						</div>
					</motion.div>
				</div>
			</section>
	);
}