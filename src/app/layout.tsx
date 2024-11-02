import './globals.css'

import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

import { cn } from '@/lib/utils'

const fontSans = Roboto_Mono({
	variable: '--font-sans',
	subsets: ['latin'],
})

const fontHeading = Roboto_Mono({
	variable: '--font-heading',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Fast-Track Your Dev Tool From Unknown to Favorite',
	description:
		'We know how to get dev tools adopted by other developers. One Day Sprint to Dev Adoption.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen font-sans antialiased',
					fontSans.variable,
					fontHeading.variable
				)}
			>
				{children}
        <script src="https://cdn.usefathom.com/script.js" data-site="RBOXQTPO" defer></script>
			</body>
		</html>
	)
}
