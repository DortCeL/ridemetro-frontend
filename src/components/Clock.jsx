"use client";

import React, { useEffect, useState } from "react";

export default function Clock() {
	const d = new Date();

	const [currentHour, setCurrentHour] = useState("");
	const [currentMinute, setCurrentMinute] = useState("");
	const [currentSecond, setCurrentSecond] = useState("");

	useEffect(() => {
		const hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
		const minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
		const second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

		const timer = setInterval(() => {
			setCurrentHour(hour);
			setCurrentMinute(minute);
			setCurrentSecond(second);
		}, 1000);

		return () => clearInterval(timer);
	}, [currentSecond]);

	return currentHour && currentMinute ? (
		<div className='flex items-center gap-1'>
			<p className='clock-cell'>{currentHour}</p>
			<p>:</p>
			<p className='clock-cell'>{currentMinute}</p>
			<p>:</p>
			<p className='clock-cell'>{currentSecond}</p>
		</div>
	) : (
		<p className='flex items-center'>Getting time...</p>
	);
}
