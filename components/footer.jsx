import Link from 'next/link';
import React from 'react';
import {
	FaPhone,
	FaAt,
	FaFacebookSquare,
	FaInstagram,
	FaTiktok,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function Footer() {
	return (
		<footer className='flex flex-col md:flex-row bg-[#000000] items-center py-10 gap-10 md:items-stretch justify-center lg:gap-40  w-full  text-white '>
			<div className=' px-4 flex flex-col items-center'>
				<div className='font-bold text-2xl pb-4'>
					<h3>Get In Touch</h3>
				</div>
				<div className='opacity-50 flex items-center md:items-start flex-col'>
					<div className='flex  items-center pb-3 gap-2'>
						<FaLocationDot />
						<p>Bon Accord AB11 6UA</p>
					</div>
					<div className='flex items-center pb-3'>
						<span className='mr-2'>
							<FaPhone />
						</span>
						+44 7753662690
					</div>
					<div className='flex items-center'>
						<span className='mr-2'>
							<FaAt />
						</span>
						hannahsguesthouse@gmail.com
					</div>
				</div>
			</div>

			<div className=' font-bold text-center '>
				<h3 className='font-bold text-2xl pb-4'>Quick Links</h3>
				<div className='opacity-50'>
					<Link href='/'>
						<h3>Home</h3>
					</Link>
					<Link href='rooms'>
						<h3>Room</h3>
					</Link>
					<Link href='about'>
						<h3>About</h3>
					</Link>
					<Link href='contact'>
						<h3>Contact</h3>
					</Link>
				</div>
			</div>

			<div>
				<h3 className='font-bold text-2xl pb-4'>Our Social Media</h3>
				<div className='flex justify-center'>
					<div className='flex opacity-50 text-center gap-5'>
						<span className='text-3xl'>
							<FaFacebookSquare />
						</span>
						<span className='text-3xl'>
							<FaInstagram />
						</span>
						<span className='text-3xl'>
							<FaTiktok />
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
