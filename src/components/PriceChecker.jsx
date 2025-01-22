"use client";
import { useState } from "react";

export const PriceChecker = () => {
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [price, setPrice] = useState(null);

	const locations = ["New York", "Los Angeles", "Chicago", "Miami", "Dallas"];

	const calculatePrice = () => {
		if (from && to && from !== to) {
			const basePrice = 100; // Base price in USD
			const randomFactor = Math.random() * 100; // Random fluctuation
			setPrice((basePrice + randomFactor).toFixed(2));
		} else {
			setPrice("Invalid selection");
		}
	};

	return (
		<div className='bg-transparent border-1 border-slate-400 shadow-xl rounded-lg p-8 w-full max-w-md'>
			<h1 className='text-2xl font-bold text-gray-800 text-center mb-6'>
				Check ticket prices
			</h1>
			<div className='space-y-4'>
				<div>
					<label className='block text-gray-700 font-medium mb-2'>From:</label>
					<select
						className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={from}
						onChange={(e) => setFrom(e.target.value)}
					>
						<option value=''>Select a location</option>
						{locations.map((location) => (
							<option key={location} value={location}>
								{location}
							</option>
						))}
					</select>
				</div>
				<div>
					<label className='block text-gray-700 font-medium mb-2'>To:</label>
					<select
						className='w-full p-3 border rounded-lg focus:outline-none '
						value={to}
						onChange={(e) => setTo(e.target.value)}
					>
						<option value=''>Select a location</option>
						{locations.map((location) => (
							<option key={location} value={location}>
								{location}
							</option>
						))}
					</select>
				</div>
				<button
					className='w-full bg-black text-white py-3 rounded-lg font-semibold transition duration-300'
					onClick={calculatePrice}
				>
					Check Price
				</button>
				{price && (
					<div className='mt-4 text-center text-lg font-medium'>
						{price === "Invalid selection" ? (
							<p className='text-red-500'>
								Please select two different locations.
							</p>
						) : (
							<p>
								Ticket Price: <span className='text-green-500'>${price}</span>
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
