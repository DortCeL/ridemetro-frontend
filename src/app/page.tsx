import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import CustomMarquee from "@/components/CustomMarquee";
import { TicketPrice } from "@/sections/TicketPrice";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<CustomMarquee />
			<TicketPrice />
		</>
	);
}
