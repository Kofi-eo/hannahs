'use client';

import React, { useState } from 'react';
import RoomsData from '../../(sampleData)/rooms.json';
import Rooms from '../../(sampleData)/data.json';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import {
	PiUsersDuotone,
	PiBedDuotone,
	PiSelectionPlusDuotone,
	PiWifiHighLight,
	PiShowerLight,
	PiTelevisionLight,
	PiCarSimpleThin,
	PiBedLight,
	PiCarLight,
	PiCouchLight,
	PiStairsLight,
	PiFireLight,
	PiFanLight,
	PiLockersLight,
	PiNeedleLight,
	PiPantsLight,
	PiSnowflakeLight,
	PiStackSimpleLight,
	PiToiletPaperLight,
	PiToiletLight,
	PiDropLight,
	PiBathtubLight,
} from 'react-icons/pi';

function RoomDetails({ params }) {
	const title = params.slug.replace(/-/g, ' ');
	const roomDetails = RoomsData.find((x) => x.title === title);

	const [SwiperRef, setSwiperRef] = useState(null);

	const prevHandler = () => {
		SwiperRef.slidePrev();
	};

	const nextHandler = () => {
		SwiperRef.slideNext();
	};

	return (
		<section>
			{/* Title */}
			<div className='p-10 flex flex-col md:flex-row gap-y-5 justify-between'>
				<div className='flex flex-row text-lg lg:text-xl gap-5 items-center'>
					<h1 className='font-bold '>{roomDetails.title}</h1>
					<div className='h-2 w-2 bg-black rounded-full'></div>
					<h1 className='text-black/50 font-medium'>{roomDetails.rate}</h1>
				</div>
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

			{/* Pictures */}
			<div className='w-full'>
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					navigation={true}
					autoplay={true}
					modules={[Navigation, Pagination]}
					className='w-full h-full'
					onSwiper={(swiper) => setSwiperRef(swiper)}
				>
					{roomDetails.photos.map((x, index) => (
						<SwiperSlide key={index}>
							<div
								style={{
									backgroundImage: `url(${x.src})`,
									backgroundPosition: '50% 75%',

									backgroundRepeat: 'no-repeat',
								}}
								className='bg-white h-80 lg:h-[80vh] w-full flex flex-col  text-black p-8  border-[0.5px] bg-cover'
							>
								<h1>.</h1>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Description */}
			<div className='flex py-10 px-5 md:px-10 text-lg gap-y-4 gap-8 md:gap-10 flex-wrap'>
				<h1 className='flex gap-2 justify-center items-center'>
					<PiUsersDuotone size={30} />
					{roomDetails.guests}
				</h1>

				{roomDetails.beds.map((x, i) => (
					<h1 key={i} className='flex gap-2 justify-center items-center'>
						<PiBedDuotone size={30} /> {x.bed}
					</h1>
				))}

				<h1 className='flex gap-2 justify-center items-center'>
					<PiSelectionPlusDuotone size={30} />
					<span>
						{roomDetails.size}m<sup>2</sup>
					</span>
				</h1>
				<h1 className='flex gap-2 justify-center items-center'>
					<PiUsersDuotone size={30} />
					{roomDetails.guests}
				</h1>
			</div>

			<div className='p-10 py-5'>
				<h1>
					Welcome to your blissful retreat in Aberdeen! Step into this
					beautifully appointed single room, where tranquility and comfort
					embrace you from the moment you arrive. The room&apos;s soft, muted
					tones create a calming ambiance, while large windows bathe the space
					in natural light, offering scenic views of the city&apos;s charming
					surroundings. Sink into the plush, heavenly bed adorned with premium
					linens, promising a restful night&apos;s sleep after a long day of
					exploration or business engagements. The carefully curated furnishings
					exude both elegance and practicality, providing ample storage space to
					keep your belongings organized during your stay. To cater to your
					relaxation needs, the room is equipped with a cozy seating area,
					perfect for unwinding with a good book or enjoying a cup of freshly
					brewed coffee from the in-room coffee maker. Stay connected with
					high-speed Wi-Fi, and stay entertained with a state-of-the-art
					flat-screen TV that offers a wide array of channels.
				</h1>
			</div>

			<hr />

			{/* Facilities */}
			<div className='p-10'>
				<h1 className='text-lg'> Room Facilities</h1>

				<div className='flex gap-5 py-10 flex-wrap'>
					{roomDetails.commodities.wifi && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiWifiHighLight size={20} /> Free Wifi
						</h1>
					)}
					{roomDetails.commodities.privateshower && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiShowerLight size={20} /> Private Shower
						</h1>
					)}
					{roomDetails.commodities.tv && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiTelevisionLight size={20} /> Flatscreen TV
						</h1>
					)}
					{roomDetails.commodities.linen && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiNeedleLight size={20} /> Linen
						</h1>
					)}
					{roomDetails.commodities.wardrobe && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiLockersLight size={20} /> Wardrope or Closet
						</h1>
					)}
					{roomDetails.commodities.heating && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiFireLight size={20} /> Heating
						</h1>
					)}
					{roomDetails.commodities.seatingArea && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiCouchLight size={20} /> Seating Area
						</h1>
					)}
					{roomDetails.commodities.clothesRack && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiPantsLight size={20} /> Clothes rack
						</h1>
					)}
					{roomDetails.commodities.towels && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiBathtubLight size={20} /> Towels
						</h1>
					)}
					{roomDetails.commodities.upperFloorsAccessibleByStairs && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiStairsLight size={20} /> Upper floors accessible by stairs only
						</h1>
					)}

					{roomDetails.commodities.entirelocateddown && (
						<h1 className='flex-row flex gap-2 p-2 px-7 border-[1px] rounded-md justify-center items-center'>
							<PiStackSimpleLight size={20} /> Entire unit located on ground
							floor
						</h1>
					)}
				</div>
			</div>
			<hr />

			{/* Other Rooms */}
			<div className='p-4 lg:p-10 flex flex-col gap-10 py-10 flex-wrap '>
				<h1 className='text-lg md:ml-6 lg:ml-0'> Other Rooms</h1>
				<div className='flex gap-2 lg:gap-10 flex-wrap lg:justify-center'>
					{Rooms.filter((x) => x.name !== title)
						.slice(0, 3)
						.map((x, index) => (
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
										<PiBedDuotone />
										{x.bed}
									</p>
								</div>
							</div>
						))}
				</div>
			</div>

			{/* map */}
			<div className='flex justify-center items-center p-4 lg:p-10'>
				<Image
					src={'/map.jpg'}
					className='lg:w-[80%] bg-center'
					height={1250}
					width={1400}
					alt='hannahs guest house map'
				/>
			</div>
		</section>
	);
}

export default RoomDetails;
