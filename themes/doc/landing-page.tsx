import { getDocMenu } from '@/api';
import { redirect } from 'next/navigation';

const LandingPage = async () => {
	const docMenu = await getDocMenu();

	return redirect(`/post/${docMenu[0].id}`);
};

export default LandingPage;
