"use client";

import { useState, useContext } from "react";
import { login } from "../../lib/auth";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
	const { setUser } = useContext(AuthContext);
	const router = useRouter();
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await login(form);
			setUser(data.user);
			router.push("/profile");
		} catch (err) {
			setError("Invalid credentials!");
		}
	};

	return (
		<div>
			<h2>Login</h2>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='Email'
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					onChange={handleChange}
					required
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}
