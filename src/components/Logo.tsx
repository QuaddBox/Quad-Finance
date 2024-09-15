/** @format */

import Image from "next/image";

const Logo = () => {
	return (
		<div className="navlogo flex items-center">
			<Image
				src="/qudfinance-logo.svg"
				width={31}
				height={30}
				alt="quadd finance logo"
			/>
			<h3 className="text-[#FBCA0A] text-2xl font-bold">
				Quadd <span className="text-white">Finance</span>
			</h3>
		</div>
	);
};

export default Logo;
