import { Guns } from 'suroi/common/src/definitions/guns.js';

export function entries() {
	return Guns.map((gun) => ({
		item: gun.idString
	}));
}

export const prerender = true;
