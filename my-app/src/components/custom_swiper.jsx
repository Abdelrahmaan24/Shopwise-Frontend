"use client";

import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export default function CustomSwiper({ children, slidesPerView = 1 }) {
	return (
		<div className="h-full">
			<Swiper
				slidesPerView={slidesPerView}
				autoplay={{
					delay: 5500,
				}}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination, Autoplay]}
				className="mySwiper">
				{children}
			</Swiper>
		</div>
	);
}
