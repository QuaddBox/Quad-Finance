/** @format */

import { nextui } from "@nextui-org/react";
/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|button|checkbox|divider|snippet|ripple|spinner|input|listbox|popover|scroll-shadow).js"
  ],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
