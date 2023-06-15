import './globals.css'
import { Providers } from '@/components/providers'
export const metadata = {
	title: 'WD Generator',
	description: 'Generate a work descriptions',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
