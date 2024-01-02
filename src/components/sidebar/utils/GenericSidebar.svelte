<script lang="ts">
	import type { ImageTab } from '$lib/types';
	import ImageTabs from '../../interactive/ImageTabs.svelte';

	export let title: string;
	export let image: string | undefined = undefined;
	export let images: ImageTab[] | undefined = undefined;
</script>

<div class="col-span-2 not-prose">
	<div class="flex flex-col gap-2 p-2 bg-muted rounded-md">
		<div class="p-2 bg-white/20 rounded-md">
			<h2 class="text-xl font-bold text-center">{title}</h2>
		</div>
		{#if images}
			<ImageTabs {images} />
		{:else if image}
			insert image
		{:else}
			No image provided
		{/if}
		<slot />
	</div>
</div>
