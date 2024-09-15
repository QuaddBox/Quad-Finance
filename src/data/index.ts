/** @format */


type perksProps = {
	image: string;
	name: string;
	description: string;
}[];

type countryCode = {
	label: string;
	value: string;
}[];

type Currencies = {
	label: string;
	value: string;
}[];

export const perks: perksProps = [
	{
		image: "/transaction.svg",
		name: "Cross-Border Transactions",
		description:
			"Quad Finance enables secure and efficient cross-border payments, making international money transfers fast and easy.",
	},
	{
		image: "/ussd.svg",
		name: "USSD Accessibility",
		description:
			"Access Quad Finance services from any mobile phone, even without the internet, ensuring financial inclusion for everyone.",
	},

	{
		image: "/device.svg",
		name: "Cross-Platform Integration",
		description:
			"Enjoy a seamless and synchronized experience across all your devices with Quad Finance, whether using USSD, web, or mobile apps.",
	},
];

export const countryCode: countryCode = [
	{ label: "Nigeria (+234)", value: "Nigeria (+234)" },
	{ label: "Kenya (+221)", value: "Kenya (+221)" },
	{ label: "Ghana (+252)", value: "Ghana (+252)" },
];

export const currencies: Currencies = [
	{
		label: "Nigeria Naira (NGN)",
		value: "Nigeria Naira (NGN)",
	},

	{
		label: "Bitcoin (BTC)",
		value: "Bitcoin (BTC)",
	},

	{
		label: "Ghanaian Cedis (GHS)",
		value: "Ghanaian Cedis (GHS)",
	},
	{
		label: "Kenyan Shillings (KES)",
		value: "Kenyan Shillings (KES)",
	},
	{
		label: "USDC",
		value: "USDC",
	},
];
