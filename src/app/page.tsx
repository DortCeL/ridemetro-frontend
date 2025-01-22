import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import CustomMarquee from "@/components/CustomMarquee";
import { Pricing } from "@/sections/Pricing";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<CustomMarquee />
			<Pricing />
		</>
	);
}
