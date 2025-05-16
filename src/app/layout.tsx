import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';

const interSans = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'HomeVision Listing',
	description: 'Compare house appreciation quickly',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`m-16 ${interSans.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
