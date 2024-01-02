import { Guns } from 'suroi/common/src/definitions/guns';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	return {
		item: Guns.find((gun) => {
			return gun.idString === params.item;
		})
	};
	error(404, 'Not Found');
}) satisfies PageLoad;
