import { PropsWithChildren } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";

export function AppProviders({ children }: PropsWithChildren) {	
	return (
		<ThemeProvider>
			{children}
		</ThemeProvider>
	);
}