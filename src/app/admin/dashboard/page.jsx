import React from "react";
import Link from "next/link";

export default function page() {
	return (
		<div className='flex h-screen'>
			{/* Sidebar */}
			<aside className='w-64 bg-gray-800 text-white flex flex-col'>
				<div className='p-4 text-lg font-bold border-b border-gray-700'>
					Admin Panel
				</div>
				<nav className='mt-4'>
					<ul>
						<li className='px-4 py-2 hover:bg-gray-700'>
							<a href='#'>Dashboard</a>
						</li>
						<li className='px-4 py-2 hover:bg-gray-700'>
							<a href='#'>Users</a>
						</li>
						<li className='px-4 py-2 hover:bg-gray-700'>
							<a href='#'>Settings</a>
						</li>
					</ul>
				</nav>
			</aside>

			{/* Main Content */}
			<div className='flex-1 flex flex-col'>
				{/* Top Bar */}
				<header className='bg-white shadow p-4 flex justify-between items-center'>
					<h1 className='text-xl font-bold'>Dashboard</h1>
					<div>
						<Link href='/admin'>
							<button className='px-4 py-2 bg-gray-800 text-white rounded'>
								Logout
							</button>
						</Link>
					</div>
				</header>

				{/* Content Area */}
				<main className='flex-1 p-6 bg-gray-100'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{/* Example Cards */}
						<div className='bg-white shadow rounded-lg p-6'>
							<h2 className='text-lg font-bold'>Total Users</h2>
							<p className='text-2xl mt-4'>1.245 Million</p>
						</div>
						<div className='bg-white shadow rounded-lg p-6'>
							<h2 className='text-lg font-bold'>Total sale</h2>
							<p className='text-2xl mt-4'>6.9 Billion</p>
						</div>
						<div className='bg-white shadow rounded-lg p-6'>
							<h2 className='text-lg font-bold'>Complaints</h2>
							<p className='text-2xl mt-4'>2</p>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
