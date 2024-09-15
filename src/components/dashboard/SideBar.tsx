/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoWallet } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const SideBar = () => {
	return (
		<>
			<div className="py-7 flex flex-col gap-[5rem]">
				{/* ==> ==> SIDE BAR LOGO */}
				<div className="flex items-center justify-center">
					<Image
						width={133}
						height={133}
						src={"/sidebar-logo.svg"}
						alt="quadfinance logo"
					/>
				</div>

				{/* ==> ==> SIDEBAR LINKS */}
				<div className="flex flex-col justify-center gap-5 ml-8">
					<div className="bg-[#FBCA0A0D] text-[#FBCA0A] w-full pl-8 py-5 border-r-2 border-r-[#FBCA0A]">
						<Link href={""} className="flex items-center gap-4">
							<MdDashboard className="w-[20px] h-[20px]" /> Dashboard
						</Link>
					</div>

					<div className=" w-full pl-8 py-5">
						<Link href={""} className="flex items-center gap-4">
							{" "}
							<IoWallet className="w-[20px] h-[20px]" /> Wallet
						</Link>
					</div>

					<div className=" w-full pl-8 py-5">
						<Link href={""} className="flex items-center gap-4">
							{" "}
							<i>
								<Image
									src={"/transfer-icon.svg"}
									width={20}
									height={20}
									alt="tranfer icon"
								/>
							</i>{" "}
							Transfer
						</Link>
					</div>

					<div className=" w-full pl-8 py-5">
						<Link href={""} className="flex items-center gap-4">
							{" "}
							<i>
								<Image
									src={"/swap-fill.svg"}
									width={20}
									height={20}
									alt="swap icon"
								/>
							</i>
							Swap
						</Link>
					</div>

					<div className=" w-full pl-8 py-5">
						<Link href={""} className="flex items-center gap-4">
							{" "}
							<i>
								<Image
									src={"/contacts-fill.svg"}
									width={20}
									height={20}
									alt="contact icon"
								/>
							</i>
							Contacts
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
