/** @format */
"use client";
import Navbar from "@/components/Navbar";
import { perks } from "@/data";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	return (
		<>
			<Navbar />
			<div className="mx-auto w-full max-w-screen-xl my-10 md:px-20">
				<div className="flex items-center w-full justify-between">
					<div className="flex flex-col gap-5 w-[50%]">
						<h1 className="font-bold text-6xl">
							<span className="text-[#FBCA0A]">Seamless</span> and Secure Crypto
							and Fiat Transactions.
						</h1>
						<p className="text-1xl font-normal">
							Easily send and receive cryptocurrency and Fiat with confidence,
							whether online or offline, through a streamlined interface
							designed for all users.
						</p>
						<div className="h-[50px]">
							<Link
								href={""}
								className="bg-[#fbca0a] flex items-center justify-between h-full px-5 w-fit">
								<Button className="bg-[#fbca0a] text-[#181818] rounded-none flex items-center justify-between">
									Sign Up Now{" "}
									<span>
										<MoveRight className="w-6" />
									</span>
								</Button>
							</Link>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<Image width={"400"} height={"400"} src={"/quaddcube.svg"} alt="" />
						<div className="flex justify-end">
							<Image width={"165"} height={"30"} src={"/sublogo.svg"} alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* ===> ---> WHY QUADDFINANCE SECTION <=== <=== */}
			<div className="mx-auto w-full max-w-screen-xl py-5 my-10 md:px-20">
				<div className="">
					<h1 className="text-center text-4xl font-semibold">
						Why <span className="text-[#fbca0a]">Quadd</span> Finance?
					</h1>
					<div className="grid grid-cols-3 gap-10 mt-10 w-100">
						{perks.map((perk) => (
							<>
								<div
									key={perk.name}
									className=" bg-[#171124] rounded-sm py-8 w-100">
									<div className="md:flex flex-shrink-0 justify-center ">
										<div className="flex p-5 items-center justify-center rounded-full bg-[#0A0614] ">
											<Image
												width={"60"}
												height={"60"}
												src={perk.image}
												alt=""
											/>
										</div>
									</div>

									<div className="flex flex-col items-center justify-center">
										<h3 className="text-[25px] font-bold text-[#FBCA0A]">
											{perk.name}
										</h3>

										<p className="text-center text-[18px] pt-3 px-4">
											{perk.description}
										</p>
									</div>
								</div>
							</>
						))}
					</div>
					<div className="h-[50px] mt-10 flex items-center justify-center">
						<Link
							href={""}
							className="bg-[#fbca0a] flex items-center justify-between h-full px-5 w-fit">
							<Button className="bg-[#fbca0a] text-[#181818] rounded-none flex items-center justify-between">
								Discover More{" "}
								<span>
									<MoveRight className="w-6" />
								</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* ===> ===> HOW IT WORKS SECTION <=== <=== */}

			<div className="how__it__works w-full my-10 md:px-20 text-[#060113] py-10">
				<div className="">
					<h1 className="text-center text-4xl font-bold 2xl:text-4xl">
						How Quadd Finance Works{" "}
					</h1>

					<div className="grid grid-cols-2 gap-10 mt-5 w-100 py-10">
						<div className="flex flex-col gap-4">
							<p className="font-bold text-2xl">Register Easily</p>
							<p>
								Sign up using USSD, web, or mobile app. Your phone number
								becomes your wallet address, and your identity is securely
								verified.
							</p>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-bold text-2xl">Send Mony Across Borders</p>
							<p>
								Transfer both crypto and fiat funds internationally with just a
								few steps, whether you’re using USSD, web, or the mobile app.
							</p>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-bold text-2xl">Fund your Wallet</p>
							<p>
								Add money in NGN, KES, or GHS via bank transfer or other
								methods, and your wallet is updated instantly.
							</p>
						</div>

						<div className="flex flex-col gap-4">
							<p className="font-bold text-2xl">Manage Your Acount</p>
							<p>
								Check your balance, view transaction history, and provide
								feedback—all synchronized across your devices for a smooth
								experience.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-4 gap-5 w-100">
						<div className="flex flex-col items-center bg-[#F6CF36B2] shadow-md py-10 justify-center">
							<Image
								width={50}
								height={50}
								src={"/loginicon.svg"}
								alt="login icon"
							/>
							<p className="font-bold text-2xl">Register Easily</p>
						</div>

						<div className="flex flex-col items-center justify-center bg-[#F6CF36B2] shadow-md py-10">
							<Image
								width={50}
								height={50}
								src={"/payment.svg"}
								alt="payment icon"
							/>
							<p className="font-bold text-2xl">Fund Your Wallet</p>
						</div>

						<div className="flex flex-col items-center justify-center bg-[#F6CF36B2] shadow-md py-10">
							<Image width={50} height={50} src={"/send.svg"} alt="send icon" />
							<p className="font-bold text-2xl text-center">
								Send Money Across Borders
							</p>
						</div>

						<div className="flex flex-col items-center bg-[#F6CF36B2] shadow-md py-10 ">
							<Image
								width={50}
								height={50}
								src={"/foldermanager.svg"}
								alt="foldermanager icon"
							/>
							<p className="font-bold text-2xl text-center">
								Manage Your Account
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* ====> ===> SECURITY SECTION <=== <=== */}

			<div className="mx-auto w-full max-w-screen-xl my-10 md:px-20">
				<div className="flex items-center justify-between gap-4 px-10 py-10">
					{/* ==> ===> <=== <=== */}
					<div className="w-[40%]">
						<div className="py-5">
							<h1 className="text-4xl font-bold">
								Your <span className="text-[#fbca0a]">Security</span> is Our Top
								Priority
							</h1>
						</div>
						{/* ===> ===>  <=== <=== */}
						<div className="flex flex-col">
							<div className="flex flex-col gap-8">
								<ol>
									<li className="list-disc text-[#fbca0a] text-[20px] font-bold">
										Encryption
									</li>
									<p>
										All transactions and data are encrypted with the latest
										technology
									</p>
								</ol>

								<ol>
									<li className="list-disc text-[#fbca0a] text-[20px] font-bold">
										2FA(Two Factor Authentication)
									</li>
									<p>Add an extra layer of security to your account.</p>
								</ol>

								<ol>
									<li className="list-disc text-[#fbca0a] text-[20px] font-bold">
										Secure Servers
									</li>
									<p>
										We use top-tier security protocols to protect your assets.
									</p>
								</ol>

								<ol>
									<li className="list-disc text-[#fbca0a] text-[20px] font-bold">
										Compliance
									</li>
									<p>
										Fully compliant with industry standards and regulations to
										ensure your transactions are always protected.
									</p>
								</ol>
							</div>
						</div>
					</div>

					{/* ==> ==> IMAGE SECTION ===> ===> */}
					<div className="">
						<div className="flex ">
							<div className="bg-[#151021] p-[30px]">
								<Image
									width={200}
									height={200}
									className="object-cover"
									src={"/quad_finance_1.svg"}
									alt="quad finance logo"
								/>
							</div>

							<div className="bg-[#110D1A] p-[30px]">
								<Image
									width={200}
									height={200}
									className="object-cover"
									src={"/shield.svg"}
									alt="quad finance logo"
								/>
							</div>
						</div>

						<div className="flex">
							<div className="bg-[#110D1A] p-[30px]">
								<Image
									width={200}
									height={200}
									className="object-cover"
									src={"/carbon_ibm.svg"}
									alt="quad finance logo"
								/>
							</div>
							<div className="bg-[#151021] p-[30px]">
								<Image
									width={200}
									height={200}
									className="object-cover"
									src={"/icons_lock.svg"}
									alt="quad finance logo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ===> ===> FREQUENTLY ASKED QUESTION <=== <=== */}

			<div className="mx-auto w-full max-w-screen-xl py-5 my-10 md:px-20">
				<h1 className="text-center text-4xl font-bold">
					Frequently Asked Questions (
					<span className="text-[#fbca0a]">FAQs</span>)
				</h1>

				<div className="my-8 grid grid-cols-2 gap-5">
					<Accordion className="text-[#F8F8F8]">
						<AccordionItem
							key="1"
							aria-label="Accordion 1"
							title={
								<span className="text-white text-left flex justify-start items-start">
									How do I create an account with Quadd finance?
								</span>
							}
							className="text-white border-1 border-solid border-[#F5E663] p-3">
							{defaultContent}
						</AccordionItem>
					</Accordion>

					<Accordion className="text-[#F8F8F8]">
						<AccordionItem
							key="2"
							aria-label="Accordion 1"
							title={
								<span className="text-white flex justify-start items-start">
									How do I contact customer support?
								</span>
							}
							className="text-white border-1 border-solid border-[#F5E663] p-3">
							{defaultContent}
						</AccordionItem>
					</Accordion>

					<Accordion className="text-[#F8F8F8]">
						<AccordionItem
							key="3"
							aria-label="Accordion 1"
							title={
								<span className="text-white flex justify-start items-start">
									Is there a fee for sending or receiving crypto?
								</span>
							}
							className="text-white border-1 border-solid border-[#F5E663] p-3">
							{defaultContent}
						</AccordionItem>
					</Accordion>

					<Accordion className="text-[#F8F8F8]">
						<AccordionItem
							key="4"
							aria-label="Accordion 1"
							title={
								<span className="text-white text-left flex justify-start items-start">
									What happens if I lose my phone?
								</span>
							}
							className="text-white border-1 border-solid border-[#F5E663] p-3">
							{defaultContent}
						</AccordionItem>
					</Accordion>

					<Accordion className="text-[#F8F8F8] ">
						<AccordionItem
							key="5"
							aria-label="Accordion 1"
							title={
								<span className="text-white text-left flex justify-start items-start">
									How do I check my balance?
								</span>
							}
							className="text-white border-1 border-solid border-[#F5E663] p-3">
							{defaultContent}
						</AccordionItem>
					</Accordion>

					<Accordion className="text-[#F8F8F8]">
						<AccordionItem
							key="6"
							aria-label="Accordion 1"
							title={
								<span className="text-white text-left flex justify-start items-start">
									What happens if I lose my phone?
								</span>
							}
							className="text-white border-1 border-solid border-[#F5E663] p-3">
							{defaultContent}
						</AccordionItem>
					</Accordion>
				</div>
			</div>

			{/* ===> ===> COMPANY'S LOGOS <=== <=== */}
			<div className=" w-full my-10">
				<div className="grid grid-cols-4 items-center">
					<div className="p-5 bg-[#110D1A] flex flex-col gap-1 items-center justify-center">
						<Image
							width={100}
							height={100}
							src={"/quad_finance_1.svg"}
							alt="quad finance logo"
						/>
						<h2>
							{" "}
							<span className="text-[#FBCA0A]">Quadd</span> Finance
						</h2>
					</div>

					<div className="p-5 bg-[#151021] flex flex-col gap-1 items-center justify-center">
						<Image
							width={100}
							height={100}
							src={"/tbdex-logo.svg"}
							alt="Tbdex logo"
						/>
						<h2 className="text-[18px]">Tbdex</h2>
					</div>

					<div className="p-5 bg-[#110D1A] flex flex-col gap-1 items-center justify-center">
						<Image
							width={100}
							height={100}
							src={"/bitcoin-logo.svg"}
							alt="bitcoin logo"
						/>
						<h2 className="text-[18px]"> Bitcoin</h2>
					</div>

					<div className="p-5 bg-[#151021] gap-1 flex flex-col items-center justify-center">
						<Image
							width={100}
							height={100}
							src={"/quad_finance_1.svg"}
							alt="quad finance logo"
						/>
						<h2>
							{" "}
							<span className="text-[#FBCA0A]">Quadd</span> Finance
						</h2>
					</div>
				</div>
			</div>
		</>
	);
}
