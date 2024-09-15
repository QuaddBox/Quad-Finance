/** @format */

import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<main className="dark text-foreground bg-background">{children}</main>
		</NextUIProvider>
	);
}
