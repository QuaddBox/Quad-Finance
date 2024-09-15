/** @format */

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="navitem__wrp text-white text-lg sticky z-50 top-0 inset-x-0 px-20 2xl:px-10 py-5 2xl:mx-auto 2xl:max-w-screen-xl">
			<header className="relative flex items-center justify-between">
				<Link href={"/"}>
					<div className="navlogo flex items-center">
						<Image
							src="/qudfinance-logo.svg"
							width={31}
							height={30}
							alt="quadd finance logo"
						/>
						<h3 className="text-[#FBCA0A]">
							Quadd <span className="text-white">Finance</span>
						</h3>
					</div>
				</Link>
				<div className="navitems flex items-center gap-10 justify-center text-md text-gray-300">
					<Link className="" href={""}>
						Features
					</Link>
					<Link href={""}>How it Works</Link>
					<Link href={""}>Security</Link>
					<Link href={""}>FAQs</Link>
				</div>

				<div className="btns flex items-center gap-10 px-5 ">
					<Link href={"/sign-in"} className="text-[#fbca0a]">
						<p className="text-[15px]">Login</p>
					</Link>

					<Link
						href={"/sign-up"}
						className=" bg-[#FBCA0A] w-full px-12 rounded-md py-2">
						<p className=" text-gray-800 text-[20]">Signup</p>
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
