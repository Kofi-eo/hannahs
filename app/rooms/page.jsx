'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from 'swiper/react';
import Link from 'next/link';
import { FreeMode, Navigation, Controller, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import RoomsData from '../(sampleData)/rooms.json';

import { LuBedSingle } from 'react-icons/lu';
import {
	PiWifiHighLight,
	PiShowerLight,
	PiTelevisionLight,
	PiCarSimpleThin,
} from 'react-icons/pi';

function Rooms() {
	const swiperr = useSwiper();
	const [SwiperRef, setSwiperRef] = useState(null);

	const prevHandler = () => {
		SwiperRef.slidePrev();
	};

	const nextHandler = () => {
		SwiperRef.slideNext();
	};

	const testSlider = [1, 2, 3, 4, 5, 6];

	return (
		<div>
			<section
				style={{
					backgroundImage: 'url(/heroImage.jpg)',
					backgroundPosition: '50% 75%',
					backgroundSize: '1920px',
					backgroundRepeat: 'no-repeat',
				}}
				className='h-[20vh] lg:h-[30vh] flex justify-center items-center relative'
			>
				<div className='bg-black/60 h-full w-full flex justify-center items-center flex-col gap-2'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
						ROOMS
					</h1>
				</div>
			</section>
			<section className='py-10 px-3 md:px-10 lg:p-20 flex flex-col gap-5'>
				{RoomsData?.map((x, i) => (
					<div
						key={i}
						className='flex flex-col md:flex-row border-[2px] rounded-md p-5 md:p-10 gap-5 lg:gap-16 '
					>
						<div className='md:w-[50%]  '>
							<Swiper
								pagination={{
									dynamicBullets: true,
								}}
								autoplay={true}
								modules={[Pagination]}
								className='w-full h-full'
								onSwiper={(swiper) => setSwiperRef(swiper)}
							>
								{x.photos.map((x, index) => (
									<SwiperSlide key={index}>
										<div
											style={{
												backgroundImage: `url(${x.src})`,
												backgroundPosition: '50% 75%',
												backgroundSize: '820px',
												backgroundRepeat: 'no-repeat',
											}}
											className='bg-white h-80 lg:h-96 rounded-[10px] w-full flex flex-col  text-black p-8  border-[0.5px] '
										>
											<h1>.</h1>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						{/* Title & Price */}
						<div className='flex flex-col gap-3'>
							<div className='flex flex-row text-lg lg:text-xl gap-5 items-center'>
								<h1 className='font-bold '>{x.title}</h1>
								<div className='h-2 w-2 bg-black rounded-full'></div>
								<h1 className='text-black/50 font-medium'>{x.rate}</h1>
							</div>

							{/* Details */}
							<div className='flex flex-col gap-3 text-lg font-semibold text-black/50'>
								<h1>{x.guests}</h1>
								<h1>
									Sized {x.size}m<sup>2</sup>
								</h1>
								<p className='text-justify text-lg text-black font-normal'>
									{x.details}
								</p>
							</div>
							<hr />

							{/* Bed(s) */}
							<div className='py-4 flex gap-5'>
								{x.beds.map((x, i) => (
									<div
										key={i}
										className='border-[1.5px] p-4 max-w-[180px] rounded-md flex flex-col gap-2'
									>
										<LuBedSingle />
										<p> {x.bed}</p>
									</div>
								))}
							</div>

							<hr />

							{/* Commodities */}
							<div className='flex flex-wrap gap-5 py-5'>
								{x.commodities.wifi && (
									<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
										<PiWifiHighLight size={20} /> Free Wifi
									</h1>
								)}
								{x.commodities.privateshower && (
									<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
										<PiShowerLight size={20} /> Private Shower
									</h1>
								)}

								{x.commodities.tv && (
									<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
										<PiTelevisionLight size={20} /> Flatscreen TV
									</h1>
								)}

								{x.commodities.freeparking && (
									<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
										<PiCarSimpleThin size={20} /> Free Parking
									</h1>
								)}
							</div>

							{/* Buttons */}
							<div className='flex  max-w-md gap-5 lg:gap-10'>
								<button className='bg-[#B84770] text-white px-10 py-3'>
									<Link href={`/rooms/${x.title.replace(/ /g, '-')}`}>
										More Details
									</Link>
								</button>
								<button className='bg-[#B84770] text-white px-10 py-3'>
									<Link
										href={
											'https://portal.freetobook.com/reservations?w_id=20201&w_tkn=R2QXxtCo5naWwHl1KSGAgE16oHBB3Xfsjlk758elAvKw2pW9GR3ClcgObUEzf'
										}
									>
										Book Now
									</Link>
								</button>
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default Rooms;
