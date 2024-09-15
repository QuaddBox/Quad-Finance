/** @format */
"use client";
import Logo from "@/components/Logo";
import { CustomInput } from "@/ui/CustomInput";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/ui/Icons";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = () => {
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<>
			<div className="signup-container relative flex py-10 flex-col items-center justify-center 2xl: px-0">
				<div className=" flex mx-auto flex-col justify-center w-2/1 px-96 space-y-6">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Logo />
					</div>

					<div className="border-solid bg-[#100c1a] border-2 rounded-lg border-[#FBCA0A] p-5 w-full flex items-center justify-center">
						<div className="grid gap-6 p-5 w-full">
							<form>
								<h1 className="text-center text-2xl">Create Your Account</h1>
								<div className="grid gap-2 py-3">
									<div className="grid gap-1 py-2 text-[#fff]">
										<Input
											variant="bordered"
											type="email"
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
											placeholder="Email"
										/>
									</div>

									<div className="grid gap-1 py-2 text-[#fff]">
										<Input
											variant="bordered"
											placeholder="Password"
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

									<div className="grid gap-1 py-2 text-[#fff]">
										<Input
											variant="bordered"
											placeholder="Confirm password"
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
											type={isVisible ? "text" : "password"}
										/>
									</div>
								</div>

								{/* ====> ===> CHECKBOX UI DESIGN <=== <==== */}
								<div className="grid gap-3 py-3">
									<div className="">
										<Checkbox defaultChecked className="dark:hover:[#D9D9D90D]">
											<p className="text-sm">
												Sign me up to receive email notification from us with
												deals, sales and updates
											</p>
										</Checkbox>
									</div>
									<div>
										<Checkbox
											defaultChecked
											className="dark:hover:[#D9D9D90D] text-sm">
											<p className="text-sm">
												I agree to the Terms and Condition and Privacy Policy
											</p>
										</Checkbox>
									</div>
									<p className="text-md text-center">
										Already have an account?{" "}
										<span className="text-[#FBCA0A]">
											<Link href={""}>Sign</Link>{" "}
										</span>{" "}
										in instead
									</p>
								</div>

								<div className="flex items-center justify-center w-full py-4">
									<Button className="w-full bg-[#FBCA0A] text-[18px] font-bold rounded-sm py-6">
										Create account
									</Button>
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
