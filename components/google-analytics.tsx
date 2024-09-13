import { GoogleAnalytics as Ga } from '@next/third-parties/google';

export const GA_ID = process.env.GA_ID;

const GoogleAnalytics = () => {
	return process.env.NODE_ENV === 'production' && GA_ID && <Ga gaId={GA_ID} />;
};

export default GoogleAnalytics;
