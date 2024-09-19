'use client';

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';

export type MenuContextProps = {
	isOpen: boolean;
	toggle: (val?: boolean) => void;
};

export const MenuContext = createContext<MenuContextProps | null>(null);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = (val?: boolean) => {
		if (val !== void 0) {
			setIsOpen(val);
		} else {
			setIsOpen(!isOpen);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.removeProperty('overflow');
		}
	}, [isOpen]);

	return (
		<MenuContext.Provider
			value={{
				isOpen,
				toggle
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenu = () => {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error('useMenuContext must be used within a MenuProvider');
	}

	return context;
};
