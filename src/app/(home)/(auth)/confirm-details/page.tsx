/** @format */
import Logo from "@/components/Logo";

import { Button, Checkbox } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
	return (
		<>
			<div className="signin-container relative flex py-10 flex-col items-center justify-center 2xl: px-0">
				<div className="form-container w-full flex mx-auto flex-col justify-center px-96 space-y-6">
					<div className="border-solid bg-[#100c1a] border-2 rounded-lg border-[#FBCA0A] p-5 w-full flex items-center justify-center">
						<div className="grid gap-6 p-5 w-full">
							<div className="text-center">
								<h1 className="text-center text-2xl">
									Are your details correct?
								</h1>
								<div className="py-3 text-[#FFFFFFB2]">
									<p>
										You cannot edit these details later and any changes might
										cause delay.
									</p>
								</div>
							</div>

							<div className="grid gap-5">
								<div>
									<p className="text-[16px] text-[#FFFFFFB2]">
										First and middle names :{" "}
										<span className="text-[#FFFFFFBF] pl-5">
											Kamoru Odogwu-Binladen
										</span>
									</p>
								</div>

								<div>
									<p className="text-[16px] text-[#FFFFFFB2]">
										Surname :{" "}
										<span className="text-[#FFFFFFBF] pl-5">Kingsley</span>
									</p>
								</div>

								<div>
									<p className="text-[16px] text-[#FFFFFFB2]">
										Date of birth :{" "}
										<span className="text-[#FFFFFFBF] pl-5">19/11/2001</span>
									</p>
								</div>
								<div>
									<p className="text-[16px] text-[#FFFFFFB2]">
										Country of residence :{" "}
										<span className="text-[#FFFFFFBF] pl-5">Nigeria</span>
									</p>
								</div>

								<div>
									<p className="text-[16px] text-[#FFFFFFB2]">
										Residential address :{" "}
										<span className="text-[#FFFFFFBF] pl-5">
											12 Abraham street, Zuma-Rock Villa,Kwenu, Pluto, Anambra.
										</span>
									</p>
								</div>
								<div>
									<p className="text-[16px] text-[#FFFFFFB2]">
										State :{" "}
										<span className="text-[#FFFFFFBF] pl-5">Anambra</span>
									</p>
								</div>
								<div>
									<p className="text-[16px] text-[#FFFFFFB2]">
										Town/City :{" "}
										<span className="text-[#FFFFFFBF] pl-5">Plutomania</span>
									</p>
								</div>
							</div>

							<div className="bg-[#231e2c] p-5 rounded-sm">
								<Checkbox defaultChecked className="dark:hover:[#D9D9D90D]">
									<p className="text-sm">
										All my details are correct and I acknowledge that I have
										read and understand the Quadd Finance{" "}
										<Link href={""} className={"text-[#68AEFF]"}>
											Terms of Use
										</Link>
									</p>
								</Checkbox>
							</div>

							<div className="flex flex-col gap-5 items-center justify-center w-full py-4">
								<Button
									size="md"
									className="w-full bg-[#FBCA0A] text-[15px] text-[#181818] rounded-sm py-6">
									Confirm
								</Button>

								<div>
									<Link href={""} className="text-center text-[#FBCA0A]">
										Edit Info
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
