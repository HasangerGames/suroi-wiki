import { Guns } from 'suroi/common/src/definitions/guns';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const gun = Guns.find((gun) => {
		return gun.idString === params.item;
	});

	const article = await import(`../articles/${params.item}.md`);
	return {
		item: gun,
		article: article.default ?? undefined
	};
	error(404, 'Not Found');
}) satisfies PageLoad;
