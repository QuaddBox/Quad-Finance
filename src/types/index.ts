/** @format */

export type Status = "In" | "Out" | "Swap";

export interface Data {
	id: number;
	amount?: number | string;
	status?: Status | any;
	type?: string;
	[key: string]: any;
}

export interface FavoriteMovers extends Data {
	tradingprice: string;
	price: number | string;
	change: string;
}
