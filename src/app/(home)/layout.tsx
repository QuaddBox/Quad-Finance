/** @format */

import Footer from "@/components/Footer";
import React from "react";

type HomeProps = {
	children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeProps) => {
	return (
		<>
			<main className="body-wrap h-full  min-h-screen relative flex flex-col">
				<div className="flex-grow flex-1">{children}</div>
				<Footer />
			</main>
		</>
	);
};

export default HomeLayout;
