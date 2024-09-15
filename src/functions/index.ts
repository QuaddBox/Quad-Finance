import { Status } from "@/types";

export const getStatusColor = (status: Status) => {
	if (status === "In") return "text-[#02FF1B]";
	if (status === "Swap") return "text-[#FAFF02]";
	return "text-[#FF2002]";
};