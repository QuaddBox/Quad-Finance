/** @format */

import DashNav from "@/components/dashboard/DashNav";
import SideBar from "@/components/dashboard/SideBar";
import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

type DashboardProps = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardProps) => {
	return (
		<div className="flex bg-[#060610]  w-full">
			<div className="w-[18%] h-[100vh] bg-[#0C0C16]">
				<SideBar />
			</div>
			<div className="w-full">
				<div className="px-6 py-5 bg-[#0C0C16] w-full border-l-1 border-[#22222a]">
					<DashNav />
				</div>
				<MantineProvider>{children}</MantineProvider>
			</div>
		</div>
	);
};

export default DashboardLayout;
