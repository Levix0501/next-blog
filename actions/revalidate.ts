'use server';

import { revalidatePath } from 'next/cache';

export const revalidateAll = async () => {
	revalidatePath('/', 'layout');
};
