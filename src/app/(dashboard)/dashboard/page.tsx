/** @format */
"use client";
import DataTablecomp from "@/components/dashboard/DataTablecomp";
import { currencies } from "@/data";
import {
	favoriteColumns,
	favoriteData,
	Transactionscolumns,
	Transactionsdata,
} from "@/ui";
import { NativeSelect } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DataTable from "react-data-table-component";
import {
	MdOutlineCallReceived,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { PiSwapLight } from "react-icons/pi";
import { TbCurrencyNaira } from "react-icons/tb";

const page = () => {
	return (
		<div className="px-5 py-5">
			<div>
				<div>
					<h1 className="text-[25px] font-thin">Dashboard</h1>
				</div>
				{/* --> ==> ASSETS ==> ==> */}
				<div className="bg-[#0C0C16] px-10 py-6">
					<div className="flex items-center justify-between">
						{/* ==> ==> Assets otems */}
						<div className="flex flex-col gap-4">
							<p className="text-[#CECECE] text-[14px]">Total Assets</p>
							<h3 className="text-[25px]">
								<span>₦</span> 20,000.45
							</h3>
						</div>

						{/* ==> ==> ASSETS MENU (DROP DOWN) */}
						<div>
							<NativeSelect
								leftSection={<TbCurrencyNaira className="text-white bg-[]" />}
								data={currencies}
								className=".mantine-NativeSelect-wrapper"
							/>
						</div>
					</div>
					{/* ==> ==> ACTIVITIES BUTTON ==> ==> */}
					<div className="flex itmes-center gap-7 pt-10 ">
						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#FBCA0A0D] text-[#FBCA0A] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<i>
									<Image
										width={24}
										height={24}
										src={"/withdraw.svg"}
										alt="withdraw icon image"
									/>
								</i>
								Withdraw
							</Link>
						</div>

						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#FBCA0A] text-[#181818] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<i>
									<Image
										width={24}
										height={24}
										src={"/deposit.svg"}
										alt="deposit icon image"
									/>
								</i>
								Deposit
							</Link>
						</div>

						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#181822] text-[#FFFFFF] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<PiSwapLight className="w-[24px] h-[24px]" />
								Swap
							</Link>
						</div>

						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#181822] text-[#FFFFFF] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<MdOutlineCallReceived className="w-[24px] h-[24px]" />
								Receive
							</Link>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-5">
					{/* ==> ==> RECENTS TRANSACTIONS ==> ==> */}
					<div className="px-7 py-6 bg-[#0C0C16] my-8 w-[50%]">
						<div>
							<h3>Recent Transactions</h3>
						</div>
						<div className="pt-[20px]">
							<DataTablecomp
								data={Transactionsdata}
								columns={Transactionscolumns}
							/>
						</div>
					</div>

					{/* ==> ==> FAVOURITE MOVERS */}
					<div className="px-7 py-6 bg-[#0C0C16] my-8 w-[50%]">
						<div>
							<h3 className="flex items-center">
								Favorite Movers <MdOutlineKeyboardArrowRight />{" "}
							</h3>
						</div>
						<div className="pt-[20px]">
							<DataTablecomp data={favoriteData} columns={favoriteColumns} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
