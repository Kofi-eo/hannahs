'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import {
	FaPhone,
	FaAt,
	FaFacebookSquare,
	FaInstagram,
	FaTiktok,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function Contact() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);

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
						CONTACT
					</h1>
				</div>
			</section>
			<div className='py-10 px-10 lg:px-20'>
				<div className=' flex flex-col md:flex-row p-10 lg:p-20 border-[1px] rounded-lg bg-pink-50/50 gap-y-20'>
					<div className='md:w-[50%] '>
						<div className='flex justify-center items-center mb-10'>
							<h1 className='font-bold text-2xl'>Get in Touch With Us</h1>
						</div>
						{/* Contact Form with React-hook-form */}
						<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
							<label>Full Name</label>
							<input
								placeholder='Enter Full Name'
								{...register('firstName')}
								className='mb-6 border-[1px] px-4 py-2'
							/>

							<label>Email</label>
							<input
								placeholder='Enter Your Email'
								{...register('Email')}
								className='mb-6 border-[1px] px-4 py-2'
							/>

							<label>Message</label>
							<textarea
								multiple={10}
								placeholder='Enter A Message'
								{...register('Message')}
								className='mb-6 border-[1px] px-4 py-2 h-32'
							/>

							<input
								type='submit'
								className='p-5 bg-[#B84770] text-white font-bold'
							/>
						</form>
					</div>
					<div className='md:w-[50%] px-2 md:px-10 lg:px-20'>
						<div className='flex justify-center items-center mb-10'>
							<h1 className='font-bold text-2xl'>Contact Info</h1>
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
				</div>
			</div>
		</div>
	);
}

export default Contact;
