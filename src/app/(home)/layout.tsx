/** @format */

import Footer from "@/components/Footer";
import { Navbar } from "@nextui-org/react";
import React from "react";
import { Inter } from "next/font/google";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });
type HomeProps = {
	children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeProps) => {
	return (
		<>
			<main className="body-wrap">
				<div className="flex-grow flex-1">{children}</div>
				<Footer />
			</main>
		</>
	);
};

export default HomeLayout;
