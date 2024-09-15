/** @format */
"use client";
import Logo from "@/components/Logo";
import { countryCode } from "@/data";

import {
	Autocomplete,
	AutocompleteItem,
	Button,
	Input,
} from "@nextui-org/react";

import React from "react";

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
							<form>
								<p className="text-center text-[20px]">
									what’s your mobile number?
								</p>
								<div className="grid gap-2 py-3">
									<div className="grid gap-1 py-2 text-[#fff]">
										<Autocomplete
											label="Country Dialing Code"
											placeholder="Select country Code"
											allowsCustomValue
											defaultItems={countryCode}>
											{(item) => (
												<AutocompleteItem key={item.value}>
													{item.value}
												</AutocompleteItem>
											)}
										</Autocomplete>
									</div>

									<div className="grid gap-1 py-2 text-[#fff]">
										<Input
											label="Mobile Number"
											placeholder="Enter your phonenumber"
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
										/>
									</div>
								</div>

								<div className="flex items-center justify-center w-full py-4">
									<Button className="bg-[#FBCA0A] text-[18px] w-1/2 rounded-sm py-6">
										Next Step
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
