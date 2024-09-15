/** @format */
import Logo from "@/components/Logo";

import { Button } from "@nextui-org/react";
import Image from "next/image";

const Page = () => {
	return (
		<>
			<div className="signin-container relative flex py-10 flex-col items-center justify-center 2xl: px-0">
				<div className="form-container w-full flex mx-auto flex-col justify-center px-96 space-y-6">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Logo />
					</div>

					<div className="border-solid bg-[#100c1a] border-2 rounded-lg border-[#FBCA0A] p-5 w-full flex items-center justify-center">
						<div className="grid gap-6 p-5 w-full ">
							<div className="text-center">
								<div className="flex items-center justify-center">
									<Image
										src={"/email-verified.svg"}
										width={60}
										height={60}
										alt="email verification icon"
									/>
								</div>

								<h1 className="text-center text-2xl">
									Your email has been verified successfully
								</h1>
							</div>

							<div className="text-center">
								<p className="text-[15px]">
									You are almost there now. It is just left with a few steps so
									you can start your journey on Quadd Finance. It will only take
									a few minutes to verify your details.
								</p>
							</div>

							<div className="text-center grid gap-5">
								<div className="flex items-center justify-center gap-2">
									<Image
										src={"/phone.svg"}
										width={25}
										height={25}
										alt="phone icon"
									/>
									<p className="">Verify your phone number</p>
								</div>

								<div className="flex items-center justify-center gap-2">
									<Image
										src={"/icons-house.svg"}
										width={25}
										height={25}
										alt="phone icon"
									/>
									<p className="">Add your personal and address details</p>
								</div>
							</div>

							<div className="flex items-center justify-center w-full py-4">
								<Button className="w-[] bg-[#FBCA0A] text-[15px] rounded-sm py-6">
									Get Started
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
