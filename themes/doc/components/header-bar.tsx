'use client';

import { appConfig } from '@/@config/app';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useMenu } from './menu-provider';

const HeaderBar = () => {
	const { isOpen, toggle } = useMenu();

	return (
		<header className="sticky top-0 z-50 pl-6 pr-1 sm:px-6 h-16 shadow-[inset_0_-1px_0_0] shadow-accents-2 bg-[hsla(0,0%,100%,.8)] backdrop-saturate-[180%] backdrop-blur-[5px]">
			<nav className="w-full h-full flex justify-between items-center max-w-[1400px]">
				<Link href="/">
					<div className="flex items-center space-x-2">
						{appConfig.logo}
						<p className="font-semibold text-foreground">
							{appConfig.siteName}
						</p>
					</div>
				</Link>

				<div className="md:hidden">
					<Hamburger
						rounded
						size={24}
						distance="lg"
						toggled={isOpen}
						toggle={() => toggle()}
					/>
				</div>
			</nav>
		</header>
	);
};

export default HeaderBar;
