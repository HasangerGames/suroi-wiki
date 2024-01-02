<script lang="ts">
	import { Guns } from 'suroi/common/src/definitions/guns';
	import GridTable from '../../components/tables/GridTable.svelte';
	import ImageCard from '../../components/basic/ImageCard.svelte';
	import { getSuroiImageLink } from '$lib/suroi';
</script>

<GridTable>
	{#each Guns as gun}
		<ImageCard
			image={getSuroiImageLink(gun)}
			title={gun.name}
			href={`/weapons/guns/${gun.idString}`}><code>{gun.idString}</code></ImageCard
		>
	{/each}
</GridTable>
