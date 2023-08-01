'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';

const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleMobileMenu = () => {
		setShow(!show);
	};

	return (
		<div className='flex justify-between px-12 py-4 bg-[#B84770]'>
			<div>
				<Link href='/'>
					<Image src='/Logo.svg' height={50} width={50} alt='HannahsLogo' />
				</Link>
			</div>
			<div className='flex-row gap-5 items-center hidden md:flex lg:flex text-white font-medium'>
				<Link href='/'>
					<h3>Home</h3>
				</Link>
				<Link href='/rooms'>
					<h3>Rooms</h3>
				</Link>
				<Link href='/about'>
					<h3>About</h3>
				</Link>
				<Link href='/contact'>
					<h3>Contact</h3>
				</Link>
			</div>
			<div>
				<button className='hidden p-2 px-8 justify-center items-center md:flex text-black bg-white rounded-full border-r-1 border-r-black font-medium hover:bg-white/90'>
					<h1>Book Now</h1>
				</button>
			</div>
			<button className='flex md:hidden text-2xl' onClick={handleMobileMenu}>
				<HiMenuAlt2 color='white' />
			</button>
			<div
				className={
					!show
						? 'fixed right-[-300px] top-0 bg-[#581c33] z-10 w-[300px] h-[100%] transition-all'
						: 'fixed right-0 top-0 z-10 h-[100%] w-[350px]  bg-[#581c33] transition-all '
				}
			>
				<div className='flex justify-between px-10 py-5'>
					<Image src='/Logo.png' height={35} width={35} alt='hannahsLogo' />
					<button onClick={handleMobileMenu} className='text-white'>
						X
					</button>
				</div>
				<div className='px-10 mt-20'>
					<div className='flex-col gap-5  flex lg:flex text-white font-medium text-lg'>
						<Link href='/' onClick={handleMobileMenu}>
							<h3>Home</h3>
						</Link>
						<Link href='/rooms' onClick={handleMobileMenu}>
							<h3>Rooms</h3>
						</Link>
						<Link href='/about' onClick={handleMobileMenu}>
							<h3>About</h3>
						</Link>
						<Link href='/contact' onClick={handleMobileMenu}>
							<h3>Contact</h3>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
