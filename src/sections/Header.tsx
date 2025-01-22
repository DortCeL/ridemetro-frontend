import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logotrain.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
	return (
		<header className='sticky top-0 backdrop-blur-md z-20'>
			<div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
				<p className='text-white/60 hidden md:block'>
					Seamless commute all over Dhaka City
				</p>

				<div className='inline-flex gap-1 items-center'>
					<p>Login to get started</p>
					<ArrowRight className='h-4 w-4 inline-flex justify-center items-center' />
				</div>
			</div>
			<div className='py-2'>
				<div className='container'>
					<div className='flex items-center justify-between'>
						<div className='inline-flex items-center gap-1'>
							<Image src={Logo} alt='Logo' height={65} width={65} />
							<p className='font-extrabold tracking-tight -translate-y-1'>
								RideMetro
							</p>
						</div>
						<MenuIcon className='h-5 w-5 md:hidden' />

						<nav className='hidden md:flex gap-6 text-black/60 font-bold items-center'>
							<a href='#'>Guide</a>
							<a href='#pricing'>Pricing</a>
							<a href='#'>Lost & Found</a>
							<a href='#'>Map</a>
							<button className='btn btn-primary animate-bounce'>Log In</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
