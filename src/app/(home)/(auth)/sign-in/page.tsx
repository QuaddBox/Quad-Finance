/** @format */
"use client";
import Logo from "@/components/Logo";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/ui/Icons";

import { Button, Checkbox, Input } from "@nextui-org/react";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<>
			<div className="signin-container relative flex py-10 flex-col items-center justify-center 2xl: px-0">
				<div className="form-container w-full flex mx-auto flex-col justify-center px-96 space-y-6">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Logo />
					</div>

					<div className="border-solid bg-[#100c1a] border-2 rounded-lg border-[#FBCA0A] p-5 w-full flex items-center justify-center">
						<div className="grid gap-6 p-5 w-full ">
							<form>
								<h1 className="text-center text-2xl">Login</h1>
								<div className="grid gap-2 py-3">
									<div className="grid gap-1 py-2 text-[#fff]">
										<Input
											variant="bordered"
											type="email"
											startContent={
												<Image
													src={"/mail-icon.svg"}
													width={15}
													height={15}
													alt="mail icon"
													className="mr-2"
												/>
											}
											classNames={{
												input: [
													"bg-transparent",
													"text-white dark:text-white/90",
													"placeholder:text-[#fff]dark:placeholder:text-white/60",
													"w-full",
												],

												innerWrapper: ["border-none"],

												inputWrapper: [
													"bg-[#D9D9D90D]",
													"focus:text-[#8d8a91]",
													"dark:hover:[#D9D9D90D]",
													"group-data-[focus=true]:bg-[#D9D9D90D]",
													"border-none",
													"outline-none",
												],
											}}
											placeholder="Enter your Email"
										/>
									</div>

									<div className="grid gap-1 py-2 text-[#fff]">
										<Input
											variant="bordered"
											placeholder="Enter your password"
											type="password"
											startContent={
												<Image
													src={"/padlock-icon.svg"}
													width={15}
													height={15}
													alt="mail icon"
													className="mr-2"
												/>
											}
											classNames={{
												input: [
													"bg-transparent",
													"text-white dark:text-white/90",
													"placeholder:text-[#fff]dark:placeholder:text-white/60",
													"w-full",
													"border-none",
												],

												inputWrapper: [
													"bg-[#D9D9D90D]",
													"focus:text-[#8d8a91]",
													"dark:hover:[#D9D9D90D]",
													"group-data-[focus=true]:bg-[#D9D9D90D]",
													"border-none",
													"outline-none",
												],
											}}
											endContent={
												<button
													className="focus:outline-none"
													type="button"
													onClick={toggleVisibility}
													aria-label="toggle password visibility">
													{isVisible ? (
														<EyeSlashFilledIcon className="text-2xl text-[#C8A2D680] pointer-events-none" />
													) : (
														<EyeFilledIcon className="text-2xl text-[#C8A2D680] pointer-events-none" />
													)}
												</button>
											}
										/>
									</div>
								</div>

								<div className="flex items-center justify-center w-full py-4">
									<Button className="w-full bg-[#FBCA0A] text-[18px] font-bold rounded-sm py-6">
										Login
									</Button>
								</div>

								<div>
									<div className="flex items-center justify-between">
										<div>
											<Checkbox
												defaultChecked
												size="sm"
												className="dark:hover:[#D9D9D90D] text-sm">
												<p className="text-[12px]">Remember me</p>
											</Checkbox>
										</div>

										<div>
											<Link href={""}>
												<p className="text-[12px]">Forgot password?</p>
											</Link>
										</div>
									</div>

									<p className="text-[15px] text-center">
										Need to create an account?{" "}
										<span className="text-[#FBCA0A]">
											<Link href={""}>Sign up</Link>
										</span>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
