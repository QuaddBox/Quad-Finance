/** @format */
import Logo from "@/components/Logo";

import { Button } from "@nextui-org/react";

const Page = () => {
	return (
		<>
			<div className="signin-container relative flex py-10 flex-col items-center justify-center 2xl: px-0">
				<div className="form-container w-full flex mx-auto flex-col justify-center px-96 space-y-6">
					<div className="flex flex-col items-center space-y-2 text-center">
						<Logo />
					</div>

					<div className="border-solid bg-[#100c1a] border-2 rounded-lg border-[#FBCA0A] p-5 w-full flex items-center justify-center">
						<div className="grid gap-6 p-5 w-full">
							<div className="text-center">
								<h1 className="text-center text-2xl">
									We&apos;ve sent you an email.
								</h1>
								<p>
									Your code has been sent to
									<span className="font-bold">deeznutz@fullcream.cum</span>
								</p>
							</div>

							<div className="text-center">
								<p className="text-[15px]">
									Please check your inbox for an email from Quadd Finance.
									Inside, you&apos;ll find a magic link—simply click on it to
									verify your email address and complete the sign-up process. If
									you don&apos;t see the email, be sure to check your spam or
									junk folder.
								</p>
							</div>

							<div className="text-center">
								<p>Have not received an email?</p>
							</div>

							<div className="flex items-center justify-center w-full py-4">
								<Button className="w-[] bg-[#FBCA0A] text-[15px] text-[#181818] rounded-sm py-6">
									Resend email
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
