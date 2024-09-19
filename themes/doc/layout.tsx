import { ReactNode } from 'react';
import DocMenu from './components/doc-menu';
import { getDocMenu } from '@/api';
import HeaderBar from './components/header-bar';
import { MenuProvider } from './components/menu-provider';

const Layout = async ({ children }: { children: ReactNode }) => {
	const docMenu = await getDocMenu();

	return (
		<MenuProvider>
			<HeaderBar />
			<div className="container flex mx-auto p-0">
				<DocMenu docMenu={docMenu} />
				{children}
			</div>
		</MenuProvider>
	);
};

export default Layout;
