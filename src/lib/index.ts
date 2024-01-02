import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import fs from 'fs';
import type { InventoryItemDefinition } from 'suroi/common/src/utils/objectDefinitions';

export async function getPageAndArticle(
	id: string,
	items: InventoryItemDefinition[],
	path: string
) {
	const item = items.find((i) => {
		return id === i.idString;
	});
	const article = await compile(fs.readFileSync(`${path}/${id}.md`).toString()).catch(() => {
		return undefined;
	});
	if (!item) {
		error(404, 'Not Found');
	}
	return {
		item: item,
		article: article ? article : undefined
	};
}
