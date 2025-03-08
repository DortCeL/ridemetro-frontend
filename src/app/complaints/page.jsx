"use client";
import React, { useState } from "react";
import complain from "@/assets/complain.jpg";
import { TbCloudUpload } from "react-icons/tb";
import { Header } from "@/sections/Header";

const ComplainBox = () => {
	const [formData, setFormData] = useState({
		date: "",
		firstName: "",
		lastName: "",
		location: "",
		department: "",
		contact: "",
		email: "",
		complaintType: "",
		problem: "",
		urgency: "Medium",
		file: null,
	});

	const [complaints, setComplaints] = useState([
		{
			id: 1,
			title: "Billing Issue",
			date: "2025-02-25",
			status: "Resolved",
			details:
				"I was charged twice for a monthly pass, and I haven’t received a refund yet.",
		},
		{
			id: 2,
			title: "Service Issue",
			date: "2025-02-26",
			status: "Pending",
			details:
				"Metro trains frequently don't follow the schedule, causing delays and overcrowding.",
		},
	]);

	const fileInputRef = React.useRef(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, file: e.target.files[0] });
	};

	const handleDropAreaClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newComplaint = {
			id: complaints.length + 1,
			title: formData.complaintType || "New Complaint",
			date: new Date().toISOString().split("T")[0],
			status: "Pending",
			details: formData.problem,
		};
		setComplaints([newComplaint, ...complaints]);
		setFormData({
			date: "",
			firstName: "",
			lastName: "",
			location: "",
			department: "",
			contact: "",
			email: "",
			complaintType: "",
			problem: "",
			urgency: "Medium",
			file: null,
		});
	};

	return (
		<>
			<Header />
			<div
				className='flex flex-col items-center min-h-screen p-6'
				style={{
					backgroundImage: `url(${complain.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}
			>
				<form
					className='bg-transparent bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mb-10 px-10 py-10'
					onSubmit={handleSubmit}
				>
					<h2 className='metro-heading  text-center mb-8'>Report Your Issue</h2>

					{/*Complaint Type*/}
					<label className='block mt-6 mb-3 text-cyan-50 text-xl graph_heading'>
						Complaint Type
					</label>
					<select
						name='complaintType'
						className='w-full p-3 rounded-full bg-black bg-opacity-50 border border-gray-600 
  hover:border-gray-400 hover:ring-1 hover:ring-gray-400 outline-none text-white 
  placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out
  focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:bg-opacity-80 
  hover:bg-opacity-70 cursor-pointer appearance-none'
						onChange={handleChange}
					>
						<option value='' className='bg-black text-gray-300 '>
							Select Type
						</option>
						<option
							value='Service Issue'
							className='bg-black text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out'
						>
							Service Issue
						</option>
						<option
							value='Safety Concern'
							className='bg-black text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out'
						>
							Safety Concern
						</option>
						<option
							value='Billing Problem'
							className='bg-black text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ease-in-out'
						>
							Billing Problem
						</option>
					</select>

					{/* Description*/}
					<label className='block mt-6 mb-3 text-cyan-50 text-xl graph_heading'>
						Description
					</label>
					<textarea
						name='problem'
						placeholder='Write your complain here...'
						className='w-full p-3 rounded-lg bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none text-white placeholder-gray-400 shadow-md transition duration-300 py-10 px-10'
						onChange={handleChange}
					></textarea>

					<div className='flex justify-center mt-6'>
						<button
							type='submit'
							className='inline-block px-8 py-3 bg-transparent border-2 border-[#7cf03d] rounded-full text-white font-semibold shadow-[0_0_10px_#7cf03d] transition-all duration-500 hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-none'
						>
							Submit
						</button>
					</div>
				</form>

				{/* Complaint History Section */}
				<div
					className='w-full max-w-4xl p-6 rounded-lg bg-black bg-opacity-50 border border-gray-600 text-white shadow-lg'
					style={{ maxHeight: "400px", overflowY: "auto" }}
				>
					<h2 className='text-3xl mb-6'>Complaint History</h2>
					<div className='space-y-4'>
						{complaints.map((complaint) => (
							<div
								key={complaint.id}
								className='p-3 rounded-lg bg-black bg-opacity-50 border border-gray-600 hover:border-white hover:ring-1 hover:ring-white outline-none shadow-md transition duration-300'
							>
								<div className='flex justify-between items-center'>
									<div>
										<h3 className='text-2xl font-semibold'>
											{complaint.title}
										</h3>
										<p className='text-cyan-400'>Date: {complaint.date}</p>
									</div>
									<span
										className={`px-3 py-1 rounded-full text-sm font-medium ${
											complaint.status === "Resolved"
												? "bg-green-200 text-green-800"
												: "bg-yellow-200 text-yellow-800"
										}`}
									>
										{complaint.status}
									</span>
								</div>
								<p className='mt-3 text-gray-300'>{complaint.details}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ComplainBox;
