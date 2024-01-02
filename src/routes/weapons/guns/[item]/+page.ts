import { Guns } from 'suroi/common/src/definitions/guns';
import type { PageLoad } from './$types';
import { getPageAndArticle } from '$lib';

export const load = (async ({ params }) => {
	return await getPageAndArticle(params.item, Guns, 'src/content/weapons/gun');
}) satisfies PageLoad;
