/** @format */

import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<>
			<div className="px-8 py-3">
				<div className="flex flex-col gap-4">
					<h1 className="text-[20px] tracking-wider">Wallet</h1>

					<div>
						<h1 className="font-[500] text-[18px] tracking-wide">Assets</h1>
						<p className="text-[14px] text-[#CECECE] font-light">
							Total Assets in all currencies:{" "}
							<span className="font-bold">600.34USD</span>
						</p>
					</div>

					{/* ==> ==> ASSETS CARD ==> ==> */}
					<div className="grid grid-cols-3 gap-5">
						<div className="flex items-center gap-5 bg-[#0C0C16] px-5 py-3 rounded-sm">
							<div>
								<Image
									width={60}
									height={60}
									src={"/bitcoin-img.svg"}
									alt="bitcoin image"
								/>
							</div>
							<div>
								<h1>0.00000023 BTC </h1>
							</div>
						</div>
						<div className="flex items-center gap-5 bg-[#0C0C16] px-5 py-3 rounded-sm">
							<div>
								<Image
									width={60}
									height={60}
									src={"/ghana.svg"}
									alt="bitcoin image"
								/>
							</div>
							<div>
								<h1>7,000.78 GHS </h1>
							</div>
						</div>
						<div className="flex items-center gap-5 bg-[#0C0C16] px-5 py-3 rounded-sm">
							<div>
								<Image
									width={60}
									height={60}
									src={"/kenya.svg"}
									alt="bitcoin image"
								/>
							</div>
							<div>
								<h1>12,000 KES </h1>
							</div>
						</div>
						<div className="flex items-center gap-5 bg-[#0C0C16] px-5 py-3 rounded-sm">
							<div>
								<Image
									width={60}
									height={60}
									src={"/nigeria.svg"}
									alt="bitcoin image"
								/>
							</div>
							<div>
								<h1>20,000.45 NGN </h1>
							</div>
						</div>
						<div className="flex items-center gap-5 bg-[#0C0C16] px-5 py-3 rounded-sm">
							<div>
								<Image
									width={60}
									height={60}
									src={"/usdc.svg"}
									alt="bitcoin image"
								/>
							</div>
							<div>
								<h1>60.03 USDC </h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
