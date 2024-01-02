<script lang="ts">
	import { getSuroiImageLink } from '$lib/suroi';
	import type { GunDefinition } from 'suroi/common/src/definitions/guns';
	import type { PageData } from './$types';

	export let data: PageData;

	const item: GunDefinition = data.item;
</script>

<img src={getSuroiImageLink(item)} />
