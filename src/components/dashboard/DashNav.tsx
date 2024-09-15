/** @format */

import { Divider } from "@nextui-org/divider";
import { Snippet } from "@nextui-org/snippet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";

const DashNav = () => {
	return (
		<>
			<div className="w-full flex items-center justify-between">
				{/* ====> ===> PROFILE WRAP Div */}
				<div className="flex items-center gap-5 space-x-4">
					{/* ===> ===> Profule items div */}
					<div className="profileitems flex items-center gap-5">
						{/* ==> ==> IMAGE DIV ==> ==> */}
						<div className="profileImage">
							<Image
								width={45}
								height={45}
								src={"/profile.svg"}
								alt="profile image"
							/>
						</div>
						{/* ==> ==> PROFILE DETAILS */}
						<div className="">
							<div>
								<p className="text-[15px]">dee**@****</p>
							</div>
							<div>
								<Snippet
									size="sm"
									symbol=""
									className="bg-transparent text-[[#535357]">
									<p className="text-[12px] text-[#535357]">+234 81 ***** 72</p>
								</Snippet>
							</div>
						</div>
					</div>
					<Divider orientation="vertical" className="my-4 bg-[#22222a]" />
					<div>
						<Link href="" className="text-[#FBCA0A]">
							Deposit
						</Link>
					</div>
				</div>

				{/* ===> ===> Action Div (notifucation and settings) */}
				<div className="flex items-center gap-3">
					<div>
						<Link href={""}>
							<IoMdNotifications className="text-[20px]" />
						</Link>
					</div>
					<div>
						<Link href={""}>
							<IoMdSettings className="text-[20px]" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashNav;
