/** @format */

import { walletAssets } from "@/data";
import Image from "next/image";
import React from "react";

const page = () => {
	const AssetsCrd = walletAssets.map((item) => {
		return (
			<div
				className="flex items-center gap-5 bg-[#0C0C16] px-5 py-3 rounded-sm"
				key={item.id}>
				<div>
					<Image width={60} height={60} src={item.img} alt={item.alt} />
				</div>
				<div>
					<h1>{item.currency} </h1>
				</div>
			</div>
		);
	});
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
					<div className="grid grid-cols-3 gap-5">{AssetsCrd}</div>

					<div>
						<div></div>
						<div>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
