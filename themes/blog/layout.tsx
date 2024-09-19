import { HeaderBar } from '@/components/layouts/header-bar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<HeaderBar />
			{children}
		</>
	);
};

export default Layout;
