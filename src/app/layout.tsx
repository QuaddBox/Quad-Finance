/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Quadd Finance",
	description:
		"Easily send and receive cryptocurrency and Fiat with confidence",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body className={inter.className}>
				<main className="body-wrap relative flex flex-col min-h-screen">
					<div className="flex-grow flex-1">
						<Providers>{children}</Providers>
					</div>
				</main>
			</body>
		</html>
	);
}
