"use client";

import  CustomSwiper  from "./custom_swiper";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Swipeer from "./swipeer";
import Swipeer2 from "./swipeer2";
import Swipeer3 from "./swipeer3";


const Header = () => {
	return (
		<div>
			<CustomSwiper>
				<SwiperSlide>
					<Swipeer />
				</SwiperSlide>
				<SwiperSlide>
                    <Swipeer2 />
				</SwiperSlide>
				<SwiperSlide>
					<Swipeer3 />
				</SwiperSlide>
			</CustomSwiper>
		</div>
	);
};

export default Header;
