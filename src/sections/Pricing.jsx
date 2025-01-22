"use client";
import { PriceChecker } from "@/components/PriceChecker";

export const Pricing = () => {
	return (
		<section
			id='pricing'
			className='grid grid-cols-1 md:grid-cols-2 gap-4 container py-20'
		>
			<PriceChecker />
		</section>
	);
};
