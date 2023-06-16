import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();

	return (
		<div className="error-page bg-gradient-to-r from-slate-900 via-[#00685E] to-slate-900">
			<Helmet>
			<title> Adventure Camp| Error Page </title>
			</Helmet>
			<div className="grid h-screen place-content-center ">
				<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="w-40 h-40 text-white">
						<path
							fill="currentColor"
							d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
						<rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
						<polygon
							fill="currentColor"
							points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
						<polygon
							fill="currentColor"
							points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
					</svg>
				</div>
				<div className="text-center space-y-5">
					<p className="font-extrabold text-8xl bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-300   animate-bounce">{error.status}</p>

					<h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
						Page {error.statusText}
					</h1>

					<Link
						to="/"
						className="group relative inline-block focus:outline-none focus:ring ">
						<span className="absolute inset-0 translate-x-0 translate-y-0 bg-gradient-to-r from-slate-900 via-[#00685E] to-slate-900 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

						<span className="relative inline-block border-2   px-8 py-3 text-sm font-bold uppercase tracking-widest text-white">
							Go back to Home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;