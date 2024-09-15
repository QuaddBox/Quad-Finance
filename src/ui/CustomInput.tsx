/** @format */
"use client"
import { extendVariants, Input } from "@nextui-org/react";

export const CustomInput = extendVariants(Input, {
	variants: {
		// <- modify/add variants
		color: {
			stone: {
				// <- add a new color variant
				inputWrapper: [
					// <- Input wrapper slot
					"bg-zinc-100",
					"border",
					"shadow",
					"transition-colors",
					"focus-within:bg-zinc-100",
					"data-[hover=true]:border-zinc-600",
					"data-[hover=true]:bg-zinc-100",
					"group-data-[focus=true]:border-zinc-600",
					// dark theme
					"dark:bg-zinc-900",
					"dark:border-zinc-800",
					"dark:data-[hover=true]:bg-zinc-900",
					"dark:focus-within:bg-zinc-900",
				],
				input: [
					// <- Input element slot
					"text-zinc-800",
					"placeholder:text-zinc-600",
					// dark theme
					"dark:text-zinc-400",
					"dark:placeholder:text-zinc-600",
				],
			},
		},
		
		removeLabel: {
			true: {
				label: "hidden",
			},
			false: {},
		},

	},
	defaultVariants: {
		color: "stone",
		textSize: "base",
		removeLabel: true,
	},
});
