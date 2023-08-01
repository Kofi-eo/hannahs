'use client';

import Image from 'next/image';
import { Luxurious_Script, Luxurious_Roman } from 'next/font/google';
import { useEffect, useState } from 'react';
import { RiSearch2Fill } from 'react-icons/ri';
import { BiBed } from 'react-icons/bi';
import Rooms from './(sampleData)/data.json';
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from 'swiper/react';
import Link from 'next/link';
import { FreeMode, Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { BiSolidStarHalf, BiSolidStar } from 'react-icons/bi';
import TestimonialData from './(sampleData)/testimonials.json';

const luxurious = Luxurious_Script({
	weight: '400',
	subsets: ['latin-ext'],
	display: 'swap',
});

const luxuriousR = Luxurious_Roman({
	weight: '400',
	subsets: ['latin-ext'],
	display: 'swap',
});

export default function Home() {
	const [checkIn, setCheckIn] = useState();

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://widget.freetobook.com/widget.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const swiperr = useSwiper();
	const [SwiperRef, setSwiperRef] = useState(null);

	const prevHandler = () => {
		SwiperRef.slidePrev();
	};

	const nextHandler = () => {
		SwiperRef.slideNext();
	};

	const categories = [
		'Concerts',
		'Theater & Art',
		'Conferences',
		'Charity',
		'Sports',
		'Festivals',
		'Party',
		'Movies',
	];

	return (
		<main>
			{/* Hero*/}
			<section
				style={{
					backgroundImage: 'url(/heroImage.jpg)',
					backgroundPosition: '50% 75%',
					backgroundSize: '1920px',
					backgroundRepeat: 'no-repeat',
				}}
				className='h-[50vh] lg:h-[75vh] flex justify-center items-center relative'
			>
				<div className='bg-black/60 h-full w-full flex justify-center items-center flex-col gap-2'>
					<h1
						className={`${luxurious.className} text-[6rem] md:text-[12rem] text-white leading-[2.5rem] md:leading-[5.5rem]`}
					>
						Hanna&apos;s
					</h1>
					<h2
						className={`${luxuriousR.className} text-[1.5rem] md:text-[3.0rem] text-white`}
					>
						Guest House
					</h2>
				</div>
				{/* Quick Search Bar*/}
				<div className=' bg-white absolute md:left-[12%] lg:left-[25%] md:p-2  p-6 lg:-bottom-8 md:-bottom-12 -bottom-32 rounded-2xl md:rounded-none border-[0.1px] border-black/20 drop-shadow-md flex-row flex justify-between text-sm md:text-lg '>
					<div
						className='ftb-widget md:w-[600px] lg:w-[800px]'
						data-id='20201'
						data-token='R2QXxtCo5naWwHl1KSGAgE16oHBB3Xfsjlk758elAvKw2pW9GR3ClcgObUEzf'
					></div>
				</div>
			</section>
			{/* Welcome*/}
			<section className='py-20 md:py-36 flex items-center text-base md:text-2xl font-semibold flex-col mt-20 md:mt-0'>
				<h1 className='md:text-4xl'>Welcome to Hannah&apos;s Guest House</h1>
				<div className='flex flex-col lg:flex-row mt-10 md:mt-16 w-full'>
					<div className='lg:w-[50%] flex flex-col justify-center items-center px-10 md:px-20 text-justify text-base'>
						<p>
							Welcome to Hannah&apos;s Guest House! We are delighted to invite
							you to experience a warm and welcoming stay at our charming guest
							house in the heart of Aberdeen. Nestled in the vibrant
							neighborhood of Bon Accord, our establishment offers a delightful
							blend of comfort, convenience, and Scottish hospitality
						</p>
						<br />
						<p>
							Whether you are a leisure traveler seeking a cozy retreat or a
							business traveler in need of a comfortable base, Hannah&apos;s
							Guest House is the perfect choice. Our dedicated team is committed
							to ensuring your stay is nothing short of exceptional, providing
							you with a home away from home. From our tastefully appointed
							rooms to our personalized services, we strive to create an
							unforgettable experience for each and every guest. Situated in
							close proximity to Aberdeen&apos;s renowned attractions, shopping
							destinations, and cultural sites, our guest house serves as an
							ideal starting point for exploring the beauty and rich heritage of
							this captivating city.
						</p>
					</div>
					<div
						className='lg:w-[50%] h-[350px] lg:h-auto flex justify-center items-center mt-10 lg:mt-0 bg-cover'
						style={{
							backgroundImage: 'url(/welcomeImage.jpg)',
							backgroundPosition: '50% 50%',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
				</div>
			</section>
			{/* Guest Rooms */}
			<section className=' bg-rose-50 py-10 flex justify-center flex-col items-center'>
				<h1
					className={`${luxurious.className} mb-8 text-center text-6xl font-bold text`}
				>
					Guest Rooms
				</h1>
				<div className=' relative pb-32 gap-y-4  px-4 lg:px-5 flex flex-col md:flex-row justify-start items-center  md:gap-2 lg:gap-5 flex-wrap md:gap-y-8'>
					{Rooms.map((x, index) => (
						<div
							key={index}
							className='w-[350px] border-black/10 border-2 flex flex-col rounded-lg overflow-hidden'
						>
							<div
								className='bg-cover h-[200px]'
								style={{
									backgroundImage: `url(${x.image})`,
									backgroundPosition: '50% 75%',
									backgroundRepeat: 'no-repeat',
								}}
							/>
							<div className='min-h-[80px] px-4 py-5 bg-white'>
								<h1 className='font-semibold text-ellipsis line-clamp-1'>
									{x.name}
								</h1>
								<p className='text-xs flex flex-row gap-1'>
									<BiBed />
									{x.bed}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* Values */}
			<section>
				<div
					style={{
						backgroundImage: 'url(/bedroom.jpg)',
						backgroundPosition: '50% 75%',
						backgroundSize: '1920px',
						backgroundRepeat: 'no-repeat',
						height: '400px',
					}}
					className='relative w-[100vw]  my-28 '
				>
					<div className=' bg-[#B84770] flex p-10 md:absolute h-auto w-[100%] md:w-[550px] -top-20 right-20 items-center text-lg flex-col text-white '>
						<h1 className='text-white text-xl font-semibold '>Values</h1>
						<h1 className='self-start mt-4 font-medium'>Warm Hospitality</h1>
						<p className=' text-white/60'>
							At our guest house, we take pride in providing warm and genuine
							hospitality to all our guests. From the moment you step through
							our doors, you&apos;ll be greeted with a friendly smile and a
							heartfelt welcome.
						</p>
						<h1 className='self-start mt-4 font-medium'>Tranquil Retreat</h1>
						<p className=' text-white/60'>
							Escape from the hustle and bustle of everyday life and immerse
							yourself in a serene and tranquil retreat at our guest house.
						</p>
						<h1 className='self-start mt-4 font-medium'>
							Exquisite Accomodations
						</h1>
						<p className=' text-white/60'>
							Indulge in the luxury of our exquisite accommodations, designed
							with your comfort in mind. Each room is thoughtfully decorated and
							furnished to create a cozy and elegant ambiance.
						</p>
					</div>
				</div>
			</section>
			{/* Testimonies*/}
			<section className='relative mt-96 py-10 md:mt-0 md:py-16 bg-rose-50'>
				<h1
					className={` absolute -top-[60px] left-5 text-[8rem] font-mono italic text-pink-900 font-extrabold`}
				>
					&apos;&apos;
				</h1>
				<Swiper
					// freeMode
					// grabCursor

					modules={[Controller, FreeMode]}
					className='catSwiper  w-[90%]'
					breakpoints={{
						0: {
							slidesPerView: 1.1,
							spaceBetween: 10,
							// centeredSlides: true,
						},
						480: {
							slidesPerView: 2.5,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2.1,
							spaceBetween: 15,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						1280: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					direction='horizontal'
					onSwiper={(swiper) => setSwiperRef(swiper)}
				>
					{TestimonialData?.map((x, index) => (
						<SwiperSlide key={index}>
							<div className='bg-white h-80 lg:h-96 rounded-[10px] min-w-[19rem] md:w-[18rem] lg:w-[26rem] flex flex-col my-6 text-black p-8 shadow-3xl drop-shadow-md border-[0.5px] '>
								<div className='gap-x-4 h-[80%] overflow-hidden'>
									<h1 className='font-bold mb-2'>{x.title}</h1>
									<p className='text-black/50 text-sm md:text-base overflow-hidden lg:text-justify'>
										{x.review}
									</p>
								</div>
								<div className='mt-4 flex flex-col lg:flex-row gap-y-4 justify-between'>
									<div>
										<h1 className='font-bold'>{x.name}</h1>
										<p className='text-black/50'>{x.country}</p>
									</div>
									<div className='flex flex-row gap-2 text-amber-400'>
										{[...Array(Math.floor(x.rating))].map((_, i) => (
											<BiSolidStar key={i} />
										))}
										{x.rating - Math.floor(x.rating) >= 0.5 && (
											<BiSolidStarHalf />
										)}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='flex justify-center items-center p-12'>
					<div className='rounded-full flex justify-between border-[1px] bg-white shadow-md drop-shadow-sm border-gray-200 py-2 px-5 w-32 text-2xl'>
						<MdNavigateBefore onClick={prevHandler} />
						<MdNavigateNext onClick={nextHandler} />
					</div>
				</div>
			</section>
		</main>
	);
}
