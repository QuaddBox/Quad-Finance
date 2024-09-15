/** @format */

import Image from "next/image";

const Footer = () => {
	return (
		<div className="w-full bg-[#151021] py-4">
			<div className="flex items-center justify-center gap-2 ">
				<Image
					width={35}
					height={35}
					src={"/qudfinance-logo.svg"}
					alt="quadfinance logo"
				/>
				<h1 className="text-[20px] font-bold">
					{" "}
					<span className="text-[#FBCA0A]">Quad</span> Finance
				</h1>
			</div>

			<div className="px-5 flex items-center justify-between text-[#C3BEDB]">
				<p>© 2024 Quadd Finance. All Rights Reserved</p>
				<p>Terms and Condition</p>
			</div>
		</div>
	);
};

export default Footer;
