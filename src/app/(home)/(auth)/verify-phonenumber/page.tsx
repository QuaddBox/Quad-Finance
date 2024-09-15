/** @format */
"use client";
import Logo from "@/components/Logo";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import PinInput from "react-pin-input";

const page = () => {
	return (
		<>
			<div className="signin-container relative flex py-[3rem] flex-col items-center justify-center 2xl: px-0">
				<div className="form-container w-full flex mx-auto flex-col justify-center px-96 space-y-6">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Logo />
					</div>

					<div className="border-solid bg-[#100c1a] border-2 rounded-lg border-[#FBCA0A] mt-[3rem] p-5 w-full flex items-center justify-center">
						<div className="grid gap-6 p-5 w-full">
							<form>
								<div>
									<h1 className="text-center text-2xl">
										Verify Your Phone Number
									</h1>
									<p className="text-center">
										Your code has been sent to{" "}
										<span className="font-bold text-[#FBCA0A]">
											+234 610 419 9176
										</span>{" "}
										via SMS
									</p>
								</div>

								<div className="flex items-center justify-center py-5">
									<PinInput
										length={6}
										style={{
											// border: "1px solid #DDDDDD40",
											outline: "none",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: "10px",
										}}
										inputStyle={{
											outline: "none",
											border: "1px solid #DDDDDD40",
											backgroundColor: "#231e2c",
										}}
										inputFocusStyle={{ outline: "none" }}
									/>
								</div>

								<div className="flex items-center justify-center w-full py-4">
									<Link href={""}>
										<Button className="bg-[#FBCA0A] px-5 text-[#181818] text-[18px] font-normal rounded-sm py-6">
											Verify
										</Button>
									</Link>
								</div>

								<div>
									<p className="text-[15px] text-center">
										Did not receive code? {""}
										<span className="text-[#FBCA0A]">
											<Link href={""}>Request again</Link>
											<span className="text-[#FFFFFFB2]"> in 00:52 secs</span>
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

export default page;
