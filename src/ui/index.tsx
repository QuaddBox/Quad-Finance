/** @format */

import { Data, FavoriteMovers } from "@/types";
import { getStatusColor } from "@/functions";


// ==> ==> TABLE DATA ==> ==>
export const Transactionscolumns: any = [
	{
		name: "Amount",
		selector: (row: Data) => row.amount,
		grow: 1,
		style: {
			width: "100%",
		},
		sortable: true,
	},

	{
		name: "Status",
		selector: (row: Data) => {
			console.log(row.status);
			
			const className = getStatusColor(row.status);
			return <p className={`${className} text-center`}>{row.status}</p>;
		},
		grow: 1,
		style: {
			width: "100%",
		},
		sortable: true,
	},

	{
		name: "Type",
		selector: (row: Data) => {
			return <p className="flex items-end justify-items-end">{row.type}</p>;
		},
		grow: 1,
		style: {
			width: "100%",
		},
		sortable: true,
	},
];

export const Transactionsdata: Data[] = [
	{
		id: 1,
		amount: "10,000",
		status: "In",
		type: "NGN",
	},
	{
		id: 2,
		amount: "20",
		status: "Out",
		type: "USDC",
	},

	{
		id: 3,
		amount: "30, 0000",
		status: "In",
		type: "GHS",
	},

	{
		id: 4,
		amount: "10,000",
		status: "Out",
		type: "NGN",
	},

	{
		id: 5,
		amount: "0.000006",
		status: "Swap",
		type: "BTC",
	},
];

// ==> ==> FAVORITE MOVERS ==> ==>
export const favoriteColumns = [
	{
		name: "Trading Pairs",
		selector: (row: FavoriteMovers) => row.tradingprice,
		sortable: true,
	},

	{
		name: "Price",
		selector: (row: FavoriteMovers) => row.price,
		sortable: true,
	},

	{
		name: "24H Change",
		selector: (row: FavoriteMovers) => (
			<p className="text-red-500">{row.change}</p>
		),
	},
];

export const favoriteData: FavoriteMovers[] = [
	{
		id: 1,
		tradingprice: "BTC/USDC",
		price: "60,232.06",
		change: "+2.17%",
	},

	{
		id: 2,
		tradingprice: "USDC/KES",
		price: "148.73",
		change: "-0.02%",
	},

	{
		id: 3,
		tradingprice: "KES/NGN",
		price: "5.41",
		change: "+0.08%",
	},

	{
		id: 4,
		tradingprice: "GHS/KES",
		price: "12.91",
		change: "-0.14%",
	},

	{
		id: 5,
		tradingprice: "GHS/NGN",
		price: "69.87",
		change: "-0.02%",
	},
];

// id,TradingPairs, price , 24h change
